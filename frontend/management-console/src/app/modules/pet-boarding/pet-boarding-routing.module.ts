import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { TenantComponent } from './pages/tenant/tenant.component';
import { DietaryRecordComponent } from './pages/dietary-record/dietary-record.component';

const routes: Routes = [
  {
    path: "reservation",
    component: ReservationComponent
  },
  {
    path: "tenant",
    component: TenantComponent,
    children: [
      {
        path: "dietary-record",
        component: DietaryRecordComponent
      },
    ]
  },
  {
    path: "",
    redirectTo: "reservation",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PetBoardingRoutingModule { }
