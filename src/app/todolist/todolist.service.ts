import {Item} from './item';
import {LoggerService} from '../utils/logger.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TodolistService {

  private _items: Item[];
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this._items = [];
  }

  public get items(): Item[] {
    return this._items;
  }

  public removeItem(item: Item): void {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
    this.logger.log('item removed');
  }

  public addItem(title: string): void {
    // this._items.push(new Item(title));
    this._items = [...this._items, new Item(title)];

    this.logger.log('item added');
  }
}
