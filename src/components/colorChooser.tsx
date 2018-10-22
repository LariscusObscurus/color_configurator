import { IColorizer, Colors, IColor } from "@/stores/colorStore";
import { inject } from "mobx-react";
import * as React from "react";
import { FrontSvg } from "./svg/FrontSvg";

interface IColorChooserProps extends IColorizer {
  colorProperty: string;
}

@inject("colorStore")
export class ColorChooser extends React.Component<IColorChooserProps> {
  constructor(props: any) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }

  public render() {
    return (
      <div>
        <h1>{this.props.colorProperty}</h1>
        {this.createColors()}
      </div>
    );
  }

  public clicked(color: IColor): void {
    if (this.props.colorStore) {
      this.props.colorStore.updateProp(this.props.colorProperty, color);
    }
  }

  private createColors() {
    return Colors.map(color => (
      <button key={color.hexCode} onClick={(event: any) => this.clicked(color)}>
        {color.name}
      </button>
    ));
  }
}
/*
  { hexCode: "#ff0000", name: "red" },
  { hexCode: "#00ff00", name: "green" },
  { hexCode: "#0000ff", name: "blue" }
*/
