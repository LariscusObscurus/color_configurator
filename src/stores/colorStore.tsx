import { action, observable } from "mobx";

export interface IColorizeable {
  colorStore?: ColorStore;
}

export interface IColor {
  hexCode: string;
  name: string;
}

export const Colors: IColor[] = [
  { hexCode: "#ff0000", name: "red" },
  { hexCode: "#00ff00", name: "green" },
  { hexCode: "#0000ff", name: "blue" }
];

export class ColorStore {
  @observable
  public body: IColor = Colors[0];
  public hemborder: IColor;
  public cuffborder: IColor;
  public neckline: IColor;

  @action
  public updateBody(color: IColor) {
    this.body = color;
  }
}
