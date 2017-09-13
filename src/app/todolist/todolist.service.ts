import {Item} from './item';

export class TodolistService {

  private _items: Item[];

  constructor() {
    this._items = [];
  }

  public get items(): Item[] {
    return this._items;
  }

  public removeItem(item: Item): void {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
  }

  public addItem(title: string): void {
    this._items.push(new Item(title));
  }
}
