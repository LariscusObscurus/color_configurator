import {
  WithStyles,
  Grid,
  withStyles,
  Paper,
  Button,
  TextField
} from "@material-ui/core";
import { inject } from "mobx-react";
import * as React from "react";
import { IMonogramable } from "@/stores/monoGramStore";
import { autorun } from 'mobx';

interface IMonogramProps extends WithStyles, IMonogramable {}

@inject("monogramStore")
class Monogram extends React.Component<
  IMonogramProps,
  { monogram: string, error: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      monogram: "",
      error: false
    };

    autorun(() => {
      if (this.props.monogramStore) {
          const monogram= this.props.monogramStore.monogram;
        this.setState({ monogram: monogram , error: monogram.length > 10});
      }
    });
  }

  private handleChange() {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target.value;
      this.setState({ monogram: input, error: input.length > 10 });
      if (this.props.monogramStore) {
        this.props.monogramStore.updateMonogram(input);
      }
    };
  }

  public render() {
    return (
      <Grid item xs>
        <Paper className={this.props.classes.paper}>
          <h2>Monogram</h2>
          <TextField
            label="Monogram"
            value={this.state.monogram}
            error={this.state.error}
            onChange={this.handleChange()}
          />
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(({ spacing }) => ({
  paper: {
    padding: spacing.unit * 2,
    textAlign: "center"
  }
}))(Monogram);
