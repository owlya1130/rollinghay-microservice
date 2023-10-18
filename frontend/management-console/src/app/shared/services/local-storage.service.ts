import { Injectable } from '@angular/core';

import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set currentStore(store: Location) {
    this.setItem("store", store);
  }
  get currentStore() {
    return this.getItem("store");
  }

  private setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private getItem(key: string) {
    const value = localStorage.getItem(key);
    return value == null || value == "undefined" ? null : JSON.parse(value);
  }
}
