import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { CageService } from 'src/app/shared/services/cage.service';
import { Cage } from 'src/app/shared/models/cage';
import { LocationService } from 'src/app/shared/services/location.service';
import { Location } from 'src/app/shared/models/location';
import { EventService } from 'src/app/shared/services/event.service';
import { Event } from 'src/app/shared/models/event';
import * as moment from 'moment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnDestroy {

  private destroy$ = new Subject<void>;

  storeID: string;
  stores: Location[] = [];
  cages: Cage[] = [];
  events: Event[] = [];
  month: moment.Moment;

  constructor(
    private localStorageSvc: LocalStorageService,
    private locationSvc: LocationService,
    private cageSvc: CageService,
    private eventSvc: EventService,
  ) {
    const currentStore = this.localStorageSvc.currentStore;
    this.storeID = currentStore.id;
    this.cageSvc.getCages(this.storeID)
      .pipe(takeUntil(this.destroy$))
      .subscribe(cages => this.cages = cages);
    this.locationSvc.getLocations("store")
      .pipe(takeUntil(this.destroy$))
      .subscribe(stores => this.stores = stores);
    this.eventSvc.getEvents(this.storeID)
      .pipe(takeUntil(this.destroy$))
      .subscribe(events => this.events = events);
    this.month = moment();

    setTimeout(() => {
      console.log("storeID", this.storeID);
      console.log("stores", this.stores);
      console.log("cages", this.cages);
      console.log("events", this.events);
    }, 1000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  nextMonth() {
    this.month = moment(this.month.add(1, 'month'));
  }

  prevMonth() {
    this.month = moment(this.month.subtract(1, 'month'));
  }
}
