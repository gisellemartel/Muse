import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
        paddingBottom: "25px",
        maxWidth: "700px",
        minWidth: "600px",
        height: "300px"
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
        width: "50%"
      },
      content: {
        // flex: '1 0 auto',
      },
      cover: {
        float: "right",
        position: "relative",
        marginLeft: "10%",
        minWidth: 275,
        minHeight: 100
      },
      controls: {
      },
};


class AudioPlayer extends Component {

  render() {
    const {title, artist, album, cover, mp3} = this.props.currentSong;
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
            {title && artist && album && cover && mp3? (
                <Card className={classnames(classes.card)}>
                <div className={classnames(classes.details)}>
                    <CardContent className={classnames(classes.content)}>
                        <Typography component="h5" variant="h5" color="secondary">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="secondary">
                            {artist}
                        </Typography>
                    </CardContent>
                    <div className={classnames(classes.controls)}>
                        <ReactAudioPlayer
                        style={{padding: "12px"}}
                        src={mp3}
                        controls
                        />
                    </div>
          
                </div>
                <CardMedia
                    className={classnames(classes.cover)}
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