import * as React from "react";
import { FrontSvg } from "./svg/FrontSvg";

export class ColorChooser extends React.Component {
  public render() {
    return (
      <div>
        <button onClick={this.clicked} />
      </div>
    );
  }

  public clicked(event: React.MouseEvent<HTMLButtonElement>): void {
    // tslint:disable-next-line:no-string-throw
    throw "wusa";
  }
}
