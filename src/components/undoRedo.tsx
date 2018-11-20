import { WithStyles, Grid, withStyles, Paper, Button } from "@material-ui/core";
import { inject } from "mobx-react";
import * as React from "react";
import { IColorizer } from "@/stores/colorStore";
import { IMonogramable } from '@/stores/monoGramStore';

interface IUndoRedoProps extends WithStyles, IColorizer, IMonogramable {}

@inject("colorStore", "monogramStore")
class UndoRedo extends React.Component<IUndoRedoProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Grid item xs>
        <Paper className={this.props.classes.paper}>
          <h2>Undo/Redo Controls</h2>

          <h3>Color</h3>
          <Button color="primary" onClick={this.undoColor()}>Undo</Button>
          <Button color="primary" onClick={this.redoColor()}>Redo</Button>

          <h3>Monogram</h3>
          <Button color="secondary" onClick={this.undoMonogram()}>Undo</Button>
          <Button color="secondary" onClick={this.redoMonogram()}>Redo</Button>
        </Paper>
      </Grid>
    );
  }
  private redoColor(): ((event: React.MouseEvent<HTMLElement>) => void) | undefined {
    return () => {
      if (this.props.colorStore) {
        this.props.colorStore.redo();
      }
      if (this.props.monogramStore) {
        this.props.monogramStore.redo();
      }
    };
  }

  private undoColor(): ((event: React.MouseEvent<HTMLElement>) => void) | undefined {
    return () => {
      if (this.props.colorStore) {
        this.props.colorStore.undo();
      }
      if (this.props.monogramStore) {
        this.props.monogramStore.undo();
      }
    };
  }

  private redoMonogram(): ((event: React.MouseEvent<HTMLElement>) => void) | undefined {
    return () => {
      if (this.props.monogramStore) {
        this.props.monogramStore.redo();
      }
    };
  }

  private undoMonogram(): ((event: React.MouseEvent<HTMLElement>) => void) | undefined {
    return () => {
      if (this.props.monogramStore) {
        this.props.monogramStore.undo();
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
