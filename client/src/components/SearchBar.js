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
        cover: "https://ibb.co/Zc39cjK"
    },
  
    {
        title: "Kissed",
        mp3: "Kissed.mp3",
        artist: "Sun",
        album: "Sun",
        cover: "https://ibb.co/X5wCF4m"
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
        
                        const mp3 = currentSong.mp3;
                        const album = currentSong.album;
                        const cover = currentSong.cover;

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
                            return song.title == title;
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
                            return song.title == title;
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
                                            <TextField {...params} label="Find Music today..." variant="outlined" fullWidth />
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



