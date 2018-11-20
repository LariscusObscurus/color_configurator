
import { MuiThemeProvider, createMuiTheme, createStyles, Theme, WithStyles } from "@material-ui/core/styles";
import * as React from 'react';
import { CssBaseline } from '@material-ui/core';
import { styles } from './App';
import { purple, green, blue, blueGrey } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  typography: {
    useNextVariants: true
  }
});

export function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}