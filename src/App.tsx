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
  Grid,
  Checkbox
} from "@material-ui/core";
import { withRoot } from "@/Theme";
import IsFleckedCheckbox from "@/components/isFleckedCheckbox";
import UndoRedo from "@/components/undoRedo";
import Monogram from "@/components/monogram";
import { MonogramStore } from "./stores/monoGramStore";

export const styles = ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    root: {
      fontFamily: "roboto"
    },
    appBar: {
      position: "relative"
    },
    layout: {
      padding: 20,
      marginLeft: "auto",
      marginRight: "auto",
      [breakpoints.up("md")]: {
        display: "flex",
        width: "100%"
      },
      [breakpoints.down("md")]: {
        display: "block"
      }
    },
    paper: {
      width: "50%",
      [breakpoints.down("md")]: {
        margin: "0 auto"
      },
      marginTop: spacing.unit * 3,
      marginBottom: spacing.unit * 3,
      padding: spacing.unit * 2
    },
    colorPickers: {
      [breakpoints.up("md")]: {},
      [breakpoints.down("md")]: {
        width: "100%"
      },
      marginTop: spacing.unit * 3,
      marginBottom: spacing.unit * 3,
      padding: spacing.unit * 2
    },
    stepper: {
      padding: `${spacing.unit * 3}px 0 ${spacing.unit * 5}px`
    }
  });

class App extends React.Component<WithStyles<typeof styles>> {
  private colorStore: ColorStore = new ColorStore();
  private monogramStore: MonogramStore = new MonogramStore();

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Provider
          colorStore={this.colorStore}
          monogramStore={this.monogramStore}
        >
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
              <div className={classes.paper}>
                <Paper>
                  <Carousel />
                </Paper>
              </div>
              <div>
                <Grid container spacing={16} className={classes.colorPickers}>
                  <ColorChooser colorProperty="body" />
                  <ColorChooser colorProperty="hemborder" />
                  <ColorChooser colorProperty="cuffborder" />
                  <ColorChooser colorProperty="neckline" />
                  <ColorChooser colorProperty="elbowPatches" />
                </Grid>
                <Grid container spacing={16} className={classes.colorPickers}>
                  <IsFleckedCheckbox />
                  <Monogram />
                  <UndoRedo />
                </Grid>
              </div>
            </div>
          </React.Fragment>
        </Provider>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
