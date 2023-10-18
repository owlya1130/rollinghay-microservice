import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LocationService } from 'src/app/shared/services/location.service';
import { Location } from 'src/app/shared/models/location';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  private destroy$ = new Subject<void>;

  stores: Location[] = [];
  authNForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorageSvc: LocalStorageService,
    private locationSvc: LocationService
  ) {
    const currentStore = this.localStorageSvc.currentStore;
    this.authNForm = this.fb.group({
      storeID: this.fb.control(currentStore ? currentStore["id"] : currentStore, Validators.required),
      username: this.fb.control(null, Validators.required),
      password: this.fb.control(null, Validators.required),
    });
    this.locationSvc.getLocations("store")
      .pipe(takeUntil(this.destroy$))
      .subscribe(stores => this.stores = stores);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  authN() {
    const storeID = this.authNForm.controls["storeID"].value;
    const store = this.stores.find(store => store.id == storeID);
    if (store !== undefined) {
      this.localStorageSvc.currentStore = store;
    }
    console.error("帳號密碼驗證");
    this.router.navigate(["/"]);
  }
}
