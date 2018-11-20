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

function sequence(N: number): Array<number> {
  return Array.apply(null, { length: N }).map(Number.call, Number);
}

export const Colors: IColor[] = [
  { hexCode: "#ff0000", name: "red" },
  { hexCode: "#00ff00", name: "green" },
  { hexCode: "#0000ff", name: "blue" },
  ...sequence(10).map(
    i => ({ hexCode: getRandomColor(), name: `Color${i}` } as IColor)
  )
];

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export class ColorStore {
  @observable
  public colors: IClothingColors;

  private undoColorStack: Array<IClothingColors>;
  private redoColorStack: Array<IClothingColors>;

  constructor() {
    this.undoColorStack = [];
    this.redoColorStack = [];
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
    this.redoColorStack = [];
    this.undoColorStack.push(this.colors);
    let newColors = { ...this.colors };
    newColors[propName] = color;
    this.colors = newColors;
  }

  @action
  public isFlecked(flecked: boolean) {
    this.redoColorStack = [];
    this.undoColorStack.push(this.colors);
    let newColors = { ...this.colors };
    newColors.isFlecked = flecked;
    this.colors = newColors;
  }

  @action
  public undo() {
    const color = this.undoColorStack.pop();
    if (color) {
      this.redoColorStack.push({...this.colors});
      this.colors = color;
    }
  }

  @action
  public redo() {
    const color = this.redoColorStack.pop();
    if (color) {
      this.undoColorStack.push({...this.colors});
      this.colors = color;
    }
  }
}
