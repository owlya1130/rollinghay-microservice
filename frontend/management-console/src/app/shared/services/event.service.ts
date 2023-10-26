import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(storeID: string) {
    return this.http.get<Event[]>("/assets/fake-db/event.json")
      .pipe(map((cages: Event[]) => cages.filter(event => event.store_id === storeID)));
  }
}
