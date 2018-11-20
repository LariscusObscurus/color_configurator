import { observable, action } from "mobx";

export interface IMonogramable {
  monogramStore?: MonogramStore;
}

export class MonogramStore {
  @observable
  public monogram: string = "";

  private undoStack: Array<string> = [];
  private redoStack: Array<string> = [];

  @action
  public updateMonogram(text: string) {
    this.redoStack = [];
    this.undoStack.push(this.monogram);
    this.monogram = text;
  }

  @action
  undo() {
    this.redoStack.push(this.monogram);
    const text = this.undoStack.pop();
    if (text !== undefined) this.monogram = text;
  }

  @action
  redo() {
    this.undoStack.push(this.monogram);
    const text = this.redoStack.pop();
    if (text !== undefined) this.monogram = text;
  }
}
