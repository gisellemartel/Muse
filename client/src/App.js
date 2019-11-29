import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Root from './Root';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#7112EF',
    },
    secondary: {
        main: '#7112EF',
    }
  }
});

const styles = {
  root: {
    textAlign: 'center',
  },
  body: {
    margin: "12%",
    minWidth: "250px"
  }
};

class App extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Root />

        <div className={classes.root}>
          <Navbar/>
          <div className={classes.body}>
            <SearchBar/>
          </div>
          <Typography variant="h6">Disclaimer: we do not own any of the copyrighted material used in this demo. For educational purposes only.</Typography>
        </div>
    </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default Root(withStyles(styles)(App));