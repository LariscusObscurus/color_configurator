import {
  WithStyles,
  Grid,
  Checkbox,
  withStyles,
  Paper,
  FormControlLabel
} from "@material-ui/core";
import { inject } from "mobx-react";
import * as React from "react";
import { IColorizer } from "@/stores/colorStore";
import { autorun } from "mobx";

interface IIsFleckedProps extends WithStyles, IColorizer {}

@inject("colorStore")
class IsFleckedCheckbox extends React.Component<
  IIsFleckedProps,
  { isFlecked: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFlecked: false
    };
    autorun(() => {
      if (this.props.colorStore) {
        this.setState({ isFlecked: this.props.colorStore.colors.isFlecked });
      }
    });
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
          <h2>Melierung</h2>
          <FormControlLabel
            label="Melierung aktivieren"
            control={
              <Checkbox
                value="checkbox"
                checked={this.state.isFlecked}
                onChange={this.handleChange()}
              />
            }
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
}))(IsFleckedCheckbox);
