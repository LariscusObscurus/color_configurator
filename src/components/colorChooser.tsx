import { IColorizer, Colors, IColor } from "@/stores/colorStore";
import { inject } from "mobx-react";
import * as React from "react";
import { Button, withStyles, WithStyles, Paper, Grid } from "@material-ui/core";

interface IColorChooserProps extends WithStyles, IColorizer {
  colorProperty: string;
}

@inject("colorStore")
class ColorChooser extends React.Component<IColorChooserProps> {
  constructor(props: any) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }

  public render() {
    return (
      <Grid item xs={12} md={6} key={this.props.colorProperty}>
        <Paper className={this.props.classes.paper}>
          <h2>{this.props.colorProperty}</h2>
          <div className={this.props.classes.colors}>{this.createColors()}</div>
        </Paper>
      </Grid>
    );
  }

  public clicked(color: IColor): void {
    if (this.props.colorStore) {
      this.props.colorStore.updateProp(this.props.colorProperty, color);
    }
  }

  private createColors() {
    return Colors.map(color => (
      <div
        className={this.props.classes.colorCircle}
        style={{ backgroundColor: color.hexCode }}
        onClick={(event: any) => this.clicked(color)}
      />
    ));
  }
}

export default withStyles(({ spacing }) => ({
  paper: {
    padding: spacing.unit * 2,
    textAlign: 'center'
  },
  colors: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  colorCircle: {
    margin: 5,
    width: '50px',
    height: '50px',
    borderRadius: '100px'
  }
}))(ColorChooser);
