import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoggerService} from '../utils/logger.service';
import {StorageService} from '../utils/storage.service';
import {Item} from './item';

@Injectable()
export class TodolistService {

  private _items: Item[];
  private logger: LoggerService;
  private storage: StorageService;

  constructor(logger: LoggerService, storage: StorageService, http: HttpClient) {
    this.logger  = logger;
    this.storage = storage;
    this._items  = storage.get() || [];

    setTimeout(() => this._items = [], 5000);

    // fetch data from serve
    http.get<Item[]>('https://jsonplaceholder.typicode.com/todos')
        .subscribe(items => this._items = items);
  }

  public get items(): Item[] {
    return this._items;
  }

  public removeItem(item: Item): void {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
    this.logger.log('item removed');
    this.storage.save(this._items);
  }

  public addItem(title: string): void {
    // this._items.push(new Item(title));
    this._items = [...this._items, new Item(title)];
    this.storage.save(this._items);

    this.logger.log('item added');
  }
}
