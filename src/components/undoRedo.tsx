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
      if (this.props.monogramStore) {
        this.props.monogramStore.redo();
      }
    };
  }

  private undo(): ((event: React.MouseEvent<HTMLElement>) => void) | undefined {
    return () => {
      if (this.props.colorStore) {
        this.props.colorStore.undo();
      }
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
