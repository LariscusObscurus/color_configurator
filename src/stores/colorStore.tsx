import { action, observable } from "mobx";

export interface IColorizeable {
  colorStore?: ColorStore;
}

export interface IColorizer {
  colorStore?: ColorStore;
}

export interface IColor {
  hexCode: string;
  name: string;
}

export interface IClothingColors {
  body: IColor;
  hemborder: IColor;
  cuffborder: IColor;
  neckline: IColor;
}

export const Colors: IColor[] = [
  { hexCode: "#ff0000", name: "red" },
  { hexCode: "#00ff00", name: "green" },
  { hexCode: "#0000ff", name: "blue" }
];

export class ColorStore {
  @observable
  public colors: IClothingColors;

  @action
  public updateColors(colors: IClothingColors) {
    this.colors = colors;
  }
}
