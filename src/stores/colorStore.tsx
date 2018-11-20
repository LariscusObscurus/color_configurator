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
  elbowPatches: IColor;
  isFlecked: boolean;
}

export const Colors: IColor[] = [
  { hexCode: "#ff0000", name: "red" },
  { hexCode: "#00ff00", name: "green" },
  { hexCode: "#0000ff", name: "blue" }
];

export class ColorStore {
  @observable
  public colors: IClothingColors;

  constructor() {
    this.colors = {
      body: { hexCode: "#fffdf5", name: "default" } as IColor,
      cuffborder: { hexCode: "#fffdf5", name: "default" } as IColor,
      hemborder: { hexCode: "#fffdf5", name: "default" } as IColor,
      elbowPatches: { hexCode: "#fffdf5", name: "default" } as IColor,
      neckline: { hexCode: "#fffdf5", name: "default" } as IColor,
      isFlecked: false
    };
  }

  @action
  public updateColors(colors: IClothingColors) {
    this.colors = colors;
  }

  @action
  public updateProp(propName: string, color: IColor) {
    let newColors = { ...this.colors };
    newColors[propName] = color;
    this.colors = newColors;
  }
}
