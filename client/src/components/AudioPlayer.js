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

const subheaderFont = '"Baskervville", serif';
const headerFont = '"Alatsi", sans-serif';

const classes = {
    card: {
        //backgroundColor: "#303030"
        backgroundColor: "#1f1f1b"
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
      },
      cover: {
        minHeight: 275,
        maxWidth: 275,
        marginBottom: "5%",
        marginTop: "3%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
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
                          <Typography style={{fontFamily: headerFont, fontSize: '42px'}} component="h5" variant="h5" color="secondary">
                              {title}
                          </Typography>
                          <Typography style={{fontFamily: subheaderFont, fontSize: '24px'}} variant="subtitle1" color="secondary">
                              {artist}
                          </Typography>
                      </CardContent>
                      <div style={{textAlign: "center"}}>
                      <CardMedia
                      className={classnames(classes.cover)}
                      image={cover}
                      title={album}
                      />
                      </div>
                   
                      <div className={classnames(classes.controls)}>
                          <ReactAudioPlayer
                          style={{padding: "12px"}}
                          src={mp3}
                          controls
                          />
                      </div>
            
                  </div>
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