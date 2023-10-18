import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { Cage } from '../models/cage';

@Injectable({
  providedIn: 'root'
})
export class CageService {

  constructor(private http: HttpClient) { }

  getCages(storeID: string) {
    return this.http.get<Cage[]>("/assets/fake-db/cage.json")
      .pipe(map((cages: Cage[]) => cages.filter(cage => cage.store_id === storeID)));
  }
}
