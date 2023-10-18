import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { CageService } from 'src/app/shared/services/cage.service';
import { Cage } from 'src/app/shared/models/cage';
import { LocationService } from 'src/app/shared/services/location.service';
import { Location } from 'src/app/shared/models/location';
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
  month: moment.Moment;

  constructor(
    private localStorageSvc: LocalStorageService,
    private locationSvc: LocationService,
    private cageSvc: CageService
  ) {
    const currentStore = this.localStorageSvc.currentStore;
    this.storeID = currentStore.id;
    this.cageSvc.getCages(this.storeID)
      .pipe(takeUntil(this.destroy$))
      .subscribe(cages => this.cages = cages);
    this.locationSvc.getLocations("store")
      .pipe(takeUntil(this.destroy$))
      .subscribe(stores => this.stores = stores);
    this.month = moment();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  nextMonth() {
    this.month = this.month.add(1, 'months');
  }

  prevMonth() {
    this.month = this.month.subtract(1, 'months');
  }
}
