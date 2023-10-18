import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(type: string) {
    return this.http.get<Location[]>("/assets/fake-db/location.json")
      .pipe(map((locations: Location[]) => locations.filter(location => location.type === type)));
  }
}
