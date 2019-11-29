import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';
import Song from '../model/Song';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography } from '@material-ui/core';

// Current Library of available songs
const songMap = {
  "Africa" : { 
      mp3: "Africa.mp3",
      artist: "Toto",
      album: "Toto IV",
      cover: "../public/album_covers/Toto.jpg"
    },

  "Arab Money" : {
      mp3: "ArabMoney.mp3",
      artist: "Busta Rhymes",
      album: "Back on my B.S.",
      cover: "../public/album_covers/Busta.jpg"
  },

  "Kissed": {
      mp3: "Kissed.mp3",
      artist: "Sun",
      album: "Sun",
      cover: "../public/album_covers/Sun.jpg"
  },
}

const library = [
    { 
        title: "Africa",
        mp3: "Africa.mp3",
        artist: "Toto",
        album: "Toto IV",
        cover: "../public/album_covers/Toto.jpg"
    },
  
    {
        title: "Arab Money",
        mp3: "ArabMoney.mp3",
        artist: "Busta Rhymes",
        album: "Back on my B.S.",
        cover: "../public/album_covers/Busta.jpg"
    },
  
    {
        title: "Kissed",
        mp3: "Kissed.mp3",
        artist: "Sun",
        album: "Sun",
        cover: "../public/album_covers/Sun.jpg"
    },
];

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // the selected song that will be passed to the audio player
            currentSong : {
                title: "Africa",
                mp3: "Africa.mp3",
                artist: "Toto",
                album: "Toto IV",
                cover: "../public/album_covers/Toto.jpg"
            },

            //will contain error message if track not found 
            message: "",
        };
    }

    handleChange = (event, option) => {
        if(event && option) {
            const title = option.title;
            const artist = option.artist;

            if(title && artist) {
                axios.get(`api/songs/?title=${title}&artist=${artist}`).then((res ) =>{
                    let trackList = (res.data.map(e => new Song(e)));
                    this.setState({trackList, message: trackList.length > 0 ? 'we have found': 'no results :(, search something else'})
                    if(trackList.length > 0) {
                        const mp3 = songMap[title].mp3;
                        const album = songMap[title].album;
                        const cover = songMap[title].cover;

                        this.setState({currentSong: {
                            title: title,
                            mp3: mp3,
                            artist: artist,
                            album: album,
                        }})
                    }
                })
            }else if (title) {
                axios.get(`api/songs/?title=${title}`).then((res)=>{
                    let trackList = (res.data.map(e => new Song(e)));
                    this.setState({trackList, message: trackList.length > 0 ? 'we have found': 'no results :(, search something else'})
                    if(trackList.length > 0) {
                        const mp3 = songMap[title].mp3;
                        const album = songMap[title].album;
                        const cover = songMap[title].cover;

                        this.setState({currentSong: {
                            title: title,
                            mp3: mp3,
                            artist: artist,
                            album: album,
                        }})
                    }
                })
            }else if (artist) {
                axios.get(`api/songs/?artist=${artist}`).then((res ) =>{
                    let trackList = (res.data.map(e => new Song(e)));
                    this.setState({trackList, message: trackList.length > 0 ? 'we have found': 'no results :(, search something else'})
                    if(trackList.length > 0) {
                        const mp3 = songMap[title].mp3;
                        const album = songMap[title].album;
                        const cover = songMap[title].cover;

                        this.setState({currentSong: {
                            title: title,
                            mp3: mp3,
                            artist: artist,
                            album: album,
                        }})
                    }
                })
            }

            event.preventDefault();
        }
    }

    render() {
        const { currentSong } = this.state;
       
        return (
            <span>

                <Autocomplete
                    id="artist-picker"
                    onInputChange={(option) => this.handleChange(option)}
                    onChange={this.handleChange}
                    disableOpenOnFocus
                    options={library.sort((artist1, artist2) => -artist1.artist.localeCompare(artist2.artist))}
                    groupBy={library => library.artist}
                    getOptionLabel={option => option.title}
                    style={{ width: 600 }}
                    renderInput={params => (
                        <TextField {...params} label="Find Music today..." variant="outlined" fullWidth />
                    )} 
                /> 
                {this.state.currentSong ? (
                    <span>
                        <Typography>{currentSong.message}</Typography>
                        <AudioPlayer currentSong={currentSong}/>
                    </span>
                ) : <div/> }   
            </span>
        );
    }
}

export default SearchBar;



