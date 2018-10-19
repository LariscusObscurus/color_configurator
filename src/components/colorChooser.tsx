import { IColorizer } from "@/stores/colorStore";
import { inject } from "mobx-react";
import * as React from "react";
import { FrontSvg } from "./svg/FrontSvg";

@inject("colorStore")
export class ColorChooser extends React.Component<IColorizer> {
  constructor(props: any) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }
  public render() {
    return (
      <div>
        <button onClick={this.clicked} />
      </div>
    );
  }

  public clicked(event: React.MouseEvent<HTMLButtonElement>): void {
    if (this.props.colorStore) {
      this.props.colorStore.updateColors({
        body: { hexCode: "#ff0000", name: "red" },
        cuffborder: { hexCode: "#ff0000", name: "red" },
        hemborder: { hexCode: "#ff0000", name: "red" },
        neckline: { hexCode: "#ff0000", name: "red" }
      });
    }
  }
}
/*
  { hexCode: "#ff0000", name: "red" },
  { hexCode: "#00ff00", name: "green" },
  { hexCode: "#0000ff", name: "blue" }
*/
