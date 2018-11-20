import { Provider } from "mobx-react";
import * as React from "react";
import { Carousel } from "./components/carousel";
import ColorChooser from "./components/colorChooser";
import { ColorStore } from "./stores/colorStore";
import {
  withStyles,
  Typography,
  AppBar,
  Toolbar,
  Paper,
  createStyles,
  Theme,
  WithStyles,
  Grid
} from "@material-ui/core";
import {  withRoot } from '@/Theme';

export const styles = ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    root: {
      fontFamily: "roboto"
    },
    appBar: {
      position: "relative"
    },
    layout: {
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    paper: {
      marginTop: spacing.unit * 3,
      marginBottom: spacing.unit * 3,
      padding: spacing.unit * 2,
      [breakpoints.up(600 + spacing.unit * 3 * 2)]: {
        marginTop: spacing.unit * 6,
        marginBottom: spacing.unit * 6,
        padding: spacing.unit * 3
      }
    },
    stepper: {
      padding: `${spacing.unit * 3}px 0 ${spacing.unit * 5}px`
    },
  });

class App extends React.Component<WithStyles<typeof styles>, {}> {
  private colorStore: ColorStore = new ColorStore();

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Provider colorStore={this.colorStore}>
          <React.Fragment>
            <AppBar
              position="absolute"
              color="default"
              className={classes.appBar}
            >
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  Configurator
                </Typography>
              </Toolbar>
            </AppBar>

            <div className={this.props.classes.layout}>
              <Paper className={classes.paper}>
                <Carousel />
              </Paper>
              <Grid container spacing={16}>
                <ColorChooser colorProperty="body" />
                <ColorChooser colorProperty="hemborder" />
                <ColorChooser colorProperty="cuffborder" />
                <ColorChooser colorProperty="neckline" />
                <ColorChooser colorProperty="elbowPatches" />
              </Grid>
            </div>
          </React.Fragment>
        </Provider>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
