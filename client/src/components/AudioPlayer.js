// import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
// import Song from '../model/Song';
// import axios from 'axios';
// import SearchBar from './SearchBar';


// class AudioPlayer extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {

//     return (
//         <div> This is the audio player component </div>
//     );
//   }
// }

// export default AudioPlayer;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import { withStyles, createMuiTheme, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

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
    },
  });

const classes = theme => ({
    card: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: 151,
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      playIcon: {
        height: 38,
        width: 38,
      },
});

class AudioPlayer extends Component {
    constructor(props) {
        super(props);
        const currentSong = this.props.currentSong;

        console.log(currentSong);
        this.state = {
            mp3: currentSong.mp3,
            title: currentSong.title,
            artist: currentSong.artist,
            album: currentSong.album,
            message: currentSong.message,
            cover: currentSong.cover
        };

      }

  render() {
    const {title, artist, album, cover} = this.state;
    return (
        <MuiThemeProvider theme={theme}>
            {title && artist && album && cover? (
                <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {artist}
                    </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={cover}
                    title={album}
                />
            </Card>
        ) : null
    }
     </MuiThemeProvider>
    );
  }
}

AudioPlayer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(classes)(AudioPlayer);