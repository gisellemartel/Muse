import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme, AppBar, Typography } from '@material-ui/core';
import '../App.css';

const headerFont = '"Alatsi", sans-serif';
const subheaderFont = '"Baskervville", serif';
const custTheme = createMuiTheme({
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

const styles = theme => ({
  navbar: {
    width: '100%',
  },
});

class Navbar extends Component {

  render() {
    return (
      <MuiThemeProvider theme={custTheme}>
        <AppBar position="static">
              <Typography color="secondary" variant="h4" style={{fontFamily: headerFont, fontSize: '72px', paddingTop: '12px'}}>
                muse
                </Typography>
              <Typography color="secondary" variant="h4" style={{fontFamily: subheaderFont, fontSize: '16px', paddingBottom: '24px'}}>
                  download, listen, inspire
              </Typography>
          </AppBar>
      </MuiThemeProvider>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);