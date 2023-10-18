import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { PetBoardingRoutingModule } from './pet-boarding-routing.module';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { DietaryRecordComponent } from './pages/dietary-record/dietary-record.component';
import { TenantComponent } from './pages/tenant/tenant.component';
import { ReservationDialogComponent } from './components/reservation-dialog/reservation-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { ResourceSchedulerComponent } from './components/resource-scheduler/resource-scheduler.component';

@NgModule({
  declarations: [
    ReservationComponent,
    DietaryRecordComponent,
    TenantComponent,
    ReservationDialogComponent,
    ResourceSchedulerComponent,
  ],
  imports: [
    CommonModule,
    PetBoardingRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
  ]
})
export class PetBoardingModule { }
