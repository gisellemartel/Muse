import React from "react";
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: "#262621",
    }
  },
});



function Root(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }

  return WithRoot;
}

export default Root;
