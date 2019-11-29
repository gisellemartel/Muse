import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';
import Song from '../model/Song';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography, Paper, Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const subheaderFont = '"Baskervville", serif';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4702a3',
            contrastText: '#fff',
        },
        secondary: {
            main: '#fffde7',
            contrastText: '#000',
        },
        type: 'dark',
    }
  });
  
  const styles = {
    paper: {
      padding: theme.spacing(40),
      textAlign: 'center',
      color: theme.palette.primary.main,
      paddingTop: "25px"
    },
  };


// Current Library of available songs
const library = [
    { 
        title: "Africa",
        mp3: "Africa.mp3",
        artist: "Toto",
        album: "Toto IV",
        cover: "https://www.musicdirect.com/Portals/0/Hotcakes/Data/products/00013a4e-0000-0000-0000-000000000000/medium/LSPC37728.jpg"
    },
  
    {
        title: "Arab Money",
        mp3: "ArabMoney.mp3",
        artist: "Busta Rhymes",
        album: "Back on my B.S.",
        cover: "https://images-na.ssl-images-amazon.com/images/I/61WSBBfHEoL.jpg"
    },
  
    {
        title: "Kissed",
        mp3: "Kissed.mp3",
        artist: "Sun",
        album: "Sun",
        cover: "http://www.astronomy.com/-/media/Images/News%20and%20Observing/News/2018/11/thesun.jpg?mw=600"
    },

    {
        title: "Ruins",
        mp3: "Ruins.mp3",
        artist: "Moon",
        album: "Moon",
        cover: "https://i1.sndcdn.com/avatars-000142013925-q9rp39-t500x500.jpg"
    },

    {
        title: "Maiden Voyage",
        mp3: "MaidenVoyage.mp3",
        artist: "Herbie Hancock",
        album: "Maiden Voyage",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Maiden_Voyage_%28Hancock%29.jpg/220px-Maiden_Voyage_%28Hancock%29.jpg"
    },

    {
        title: "Pinch",
        mp3: "Pinch.mp3",
        artist: "Can",
        album: "Ege Bamyasi",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Egebamyasialbumcover.jpg/220px-Egebamyasialbumcover.jpg"
    },

    {
        title: "Hyper-Ballad",
        mp3: "Hyper-Ballad.mp3",
        artist: "Bjork",
        album: "Post",
        cover: "https://upload.wikimedia.org/wikipedia/en/3/3f/Bjork_Post.png"
    },


    {
        title: "Bachelorette",
        mp3: "Bechelorette.mp3",
        artist: "Bjork",
        album: "Homogenic",
        cover: "https://upload.wikimedia.org/wikipedia/en/a/af/Björk_-_Homogenic.png"
    },

    {
        title: "Auntie's Harp",
        mp3: "AuntiesHarp.mp3",
        artist: "Flying Lotus",
        album: "Los Angeles",
        cover: "https://static.stereogum.com/uploads/2018/06/Flying-Lotus-Los-Angeles-1528337036-640x640.jpg"
    },

    {
        title: "Telephasic Workshop",
        mp3: "TelephasicWorkshop.mp3",
        artist: "Boards of Canada",
        album: "Music Has the Right to Children",
        cover: "https://upload.wikimedia.org/wikipedia/en/e/e9/Musichastherighttochildren.jpg"
    },

    {
        title: "A Night in Tunisia",
        mp3: "ANightinTunisia.mp3",
        artist: "Art Blakey and the Jazz Messengers",
        album: "A Night in Tunisia",
        cover: "https://cdn3.volusion.com/gnvdh.kdfvm/v/vspfiles/photos/MMBST-84049-2.jpg"
    },

    {
        title: "Optimistic",
        mp3: "Optimistic.mp3",
        artist: "Radiohead",
        album: "Kid A",
        cover: "https://media.pitchfork.com/photos/5929a1ebb1335d7bf1698393/1:1/w_320/dddaf5bb.jpg"
    }
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
                cover: "https://www.musicdirect.com/Portals/0/Hotcakes/Data/products/00013a4e-0000-0000-0000-000000000000/medium/LSPC37728.jpg"
            },

            //will contain error message if track not found 
            message: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, currentSong) => {
 
        if(event && currentSong) {
            event.preventDefault();
            this.setState({[currentSong]: currentSong});
            const title = currentSong.title;
            const artist = currentSong.artist;

            if(title && artist) {
                axios.get(`api/songs/?title=${title}&artist=${artist}`).then((res ) =>{
                    let trackList = (res.data.map(e => new Song(e)));
                    this.setState({trackList, message: trackList.length > 0 ? '': 'no results :(, search something else'});
                    if(trackList.length > 0) {
        
                        const song = library.find((song) => {
                            return song.title === title;
                        });
                        const mp3 = song.mp3;
                        const album = song.album;
                        const cover = song.cover;

                        this.setState({currentSong: {
                            title: title,
                            mp3: mp3,
                            artist: artist,
                            album: album,
                            cover: cover
                        }});
                    }
                })
            }else if (title) {
                axios.get(`api/songs/?title=${title}`).then((res)=>{
                    let trackList = (res.data.map(e => new Song(e)));
                    this.setState({trackList, message: trackList.length > 0 ? '': 'no results :(, search something else'});
                    if(trackList.length > 0) {
                        const song = library.find((song) => {
                            return song.title === title;
                        });
                        const mp3 = song.mp3;
                        const album = song.album;
                        const cover = song.cover;

                        this.setState({currentSong: {
                            title: title,
                            mp3: mp3,
                            artist: artist,
                            album: album,
                            cover: cover
                        }});
                    }
                })
            }else if (artist) {
                axios.get(`api/songs/?artist=${artist}`).then((res ) =>{
                    let trackList = (res.data.map(e => new Song(e)));
                    this.setState({trackList, message: trackList.length > 0 ? '': 'no results :(, search something else'});
                    if(trackList.length > 0) {
                        const song = library.find((song) => {
                            return song.title === title;
                        });
                        const mp3 = song.mp3;
                        const album = song.album;
                        const cover = song.cover;

                        this.setState({currentSong: {
                            title: title,
                            mp3: mp3,
                            artist: artist,
                            album: album,
                            cover: cover
                        }});
                    }
                })
            }
        }
    }

    render() {
        const { currentSong, message } = this.state;
       
        return (
            <MuiThemeProvider theme={theme}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Paper className={styles.paper}>
                            <Autocomplete
                                        id="artist-picker"
                                        value={currentSong}
                                        onChange={this.handleChange}
                                        disableOpenOnFocus
                                        options={library.sort((artist1, artist2) => -artist1.artist.localeCompare(artist2.artist))}
                                        groupBy={library => library.artist}
                                        getOptionLabel={option => option.title}
                                        style={{ width: "100%"}}
                                        renderInput={params => (
                                            <TextField {...params} label="Search for artist or track..." variant="outlined" fullWidth />
                                        )} 
                                    /> 
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={styles.paper}>
                        <Typography color="secondary" variant="h4" style={{fontFamily: subheaderFont, fontSize: '16px', paddingBottom: '24px'}} >{message}</Typography>
                            <AudioPlayer currentSong={this.state.currentSong}/>   
                        </Paper>
                    </Grid>
                </Grid>   
            </MuiThemeProvider>
        );
    }
}


SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SearchBar);



