import {
  WithStyles,
  Grid,
  withStyles,
  Paper,
  Button
} from "@material-ui/core";
import { inject } from "mobx-react";
import * as React from "react";
import { IColorizer } from "@/stores/colorStore";

interface IUndoRedoProps extends WithStyles, IColorizer {}

@inject("colorStore")
class UndoRedo extends React.Component<IUndoRedoProps> {
  constructor(props: any) {
    super(props);
  }

  private handleChange() {
    return (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      this.setState({ isFlecked: checked });
      if (this.props.colorStore) {
        this.props.colorStore.isFlecked(checked);
      }
    };
  }

  public render() {
    return (
      <Grid item xs>
        <Paper className={this.props.classes.paper}>
          <h2>Undo/Redo Controls</h2>
          <Button onClick={this.undo()}>Undo</Button>
          <Button onClick={this.redo()}>Redo</Button>
        </Paper>
      </Grid>
    );
  }
  private redo(): ((event: React.MouseEvent<HTMLElement>) => void) | undefined {
      return () => {
          if (this.props.colorStore) {
              this.props.colorStore.redo();
          }
      };
  }

  private undo(): ((event: React.MouseEvent<HTMLElement>) => void) | undefined {
      return () => {
          if (this.props.colorStore) {
              this.props.colorStore.undo();
          }
      };
  }
}

export default withStyles(({ spacing }) => ({
  paper: {
    padding: spacing.unit * 2,
    textAlign: "center"
  }
}))(UndoRedo);
