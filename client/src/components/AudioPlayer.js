import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';


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
    },
    
  });

const classes = {
    card: {
        display: 'flex',
        backgroundColor: "purple",
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
};


class AudioPlayer extends Component {

  render() {
    const {title, artist, album, cover, mp3} = this.props.currentSong;
    const { classes, backgroundColor } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
            {title && artist && album && cover && mp3? (
                <Card className={classnames(classes.card)} style={{backgroundColor}}>
                <Paper className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5" color="secondary">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="secondary">
                            {artist}
                        </Typography>
                    </CardContent>
                    <ReactAudioPlayer
                        style={{width: "90%", padding: "12px"}}
                        src={mp3}
                        controls
                    />
                </Paper>
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