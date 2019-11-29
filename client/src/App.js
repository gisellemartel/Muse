import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import Root from './Root';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
    padding: "20%"
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
        </div>
    </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default Root(withStyles(styles)(App));