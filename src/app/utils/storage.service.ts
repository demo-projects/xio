import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  private store;
  private key;

  constructor() {
    this.key   = 'LIST';
    this.store = localStorage;
  }

  save(data: any): void {
    this.store.setItem(this.key, JSON.stringify(data));
  }

  get(): any {
    return JSON.parse(this.store.getItem(this.key));
  }
}
