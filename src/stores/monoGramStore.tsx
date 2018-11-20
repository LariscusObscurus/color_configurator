import { observable, action } from 'mobx';

export interface IMonogramable {
    monogramStore?: MonogramStore
}

export class MonogramStore {
  @observable
  public monogram: string;

  @action
  public updateMonogram(text: string) {
      this.monogram = text;
  }
}