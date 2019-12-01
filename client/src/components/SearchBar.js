import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';
import Song from '../model/Song';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography, Grid, CircularProgress} from '@material-ui/core';
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

class SearchBar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            trackList: [],
            isLoading: true,
            // the selected song that will be passed to the audio player
            currentSong : {
                title: "",
                mp3: "",
                artist: "",
                album: "",
                cover: ""
            },

            //will contain error message if track not found 
            message: "",
        };

        this.library = [];  //list that will contain track metadata for search bar let library;  //list that will contain track metadata for search bar
        this.songMap = {};
        this.handleChange = this.handleChange.bind(this);
        this.getLibrary = this.getLibrary.bind(this);
        this.parseTrackList = this.parseTrackList.bind(this);
    }

    componentDidMount() {
        this.getLibrary();
      }
    
      getLibrary() {
        axios.get('api/songs').then((response) => {
          if (response.data) {
            this.songMap = response.data;
            this.parseTrackList();
          }
        }).catch((error) => {
          console.error(error);
        });
      }


      parseTrackList() {
        const tracks = this.songMap;
        const lib = [];
    
        Object.keys(tracks).forEach((song) => {
          const track = tracks[song];
    
          if (track) {
            const title = track.title;
            const artist = track.artist;
            const album = track.album;
            const cover = track.cover;
            const mp3 = track.mp3;

            let metadata = { title: title, artist: artist, album: album, cover: cover, mp3: mp3};

            lib.push(metadata);
            }
          }
        );
    
        this.library = lib;
        this.setState({
          trackList: this.library,
          currentSong: this.library[0],
          isLoading: false
        });

        console.log(this.library);
      }
      
    handleChange = (event, currentSong) => {
        if(event && currentSong) {

            this.setState({isLoading: true});
            event.preventDefault();
            this.setState({[currentSong]: currentSong});
            const title = currentSong.title;
            const artist = currentSong.artist;
            const album = currentSong.album;
            const cover = currentSong.cover;

            if(title && artist && album && cover) {
                axios.get(`api/songs/?title=${title}&artist=${artist}&album=${album}&cover=${cover}`).then((res ) =>{
                    let trackList = (res.data.map(e => new Song(e)));
                    this.setState({trackList, message: trackList.length > 0 ? '': 'no results :(, search something else'});
                    if(trackList.length > 0) {
        
                        const song = this.library.find((song) => {
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
                        }, 
                            trackList: this.library,
                            isLoading: false
                        }
                        );
                    }
                })
            }else if (title) {
                axios.get(`api/songs/?title=${title}`).then((res)=>{
                    let trackList = (res.data.map(e => new Song(e)));
                    this.setState({trackList, message: trackList.length > 0 ? '': 'no results :(, search something else'});
                    if(trackList.length > 0) {
        
                        const song = this.library.find((song) => {
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
                        }, 
                            trackList: this.library,
                            isLoading: false
                        }
                        );
                    }
                })
            }else if (artist) {
                axios.get(`api/songs/?artist=${artist}`).then((res ) =>{
                    let trackList = (res.data.map(e => new Song(e)));
                    this.setState({trackList, message: trackList.length > 0 ? '': 'no results :(, search something else'});
                    if(trackList.length > 0) {
        
                        const song = this.library.find((song) => {
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
                        }, 
                            trackList: this.library,
                            isLoading: false
                        }
                        );
                    }
                })
            }
        }
    }

    render() {
        const { isLoading, currentSong, message, trackList } = this.state;
        console.log(currentSong);
        return (   
        <MuiThemeProvider theme={theme}>
            { !isLoading ? (
                            
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Autocomplete
                                    id="artist-picker"
                                    value={currentSong}
                                    onChange={this.handleChange}
                                    disableOpenOnFocus
                                    options={trackList.sort((artist1, artist2) => -artist1.artist.localeCompare(artist2.artist))}
                                    groupBy={trackList => trackList.artist}
                                    getOptionLabel={option => option.title}
                                    style={{ width: "100%"}}
                                    renderInput={params => (
                                        <TextField {...params} label="Search for artist or track..." variant="outlined" fullWidth />
                                    )} 
                                /> 
                    </Grid>
                    <Grid item xs={12}>
                        {/* <Paper className={styles.paper}> */}
                        <Typography color="secondary" variant="h4" style={{fontFamily: subheaderFont, fontSize: '16px', paddingBottom: '24px'}} >{message}</Typography>
                        <AudioPlayer currentSong={this.state.currentSong}/>   
                        {/* </Paper> */}
                    </Grid>
                </Grid>   
            ): (
                <span>
                    <CircularProgress color="secondary" />
                </span>
                )    
        }
           </MuiThemeProvider>
        );
    }
}


SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SearchBar);



