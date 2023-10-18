import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "pet-boarding",
        loadChildren: () => import('./modules/pet-boarding/pet-boarding.module').then(m => m.PetBoardingModule)
      },
      {
        path: "",
        redirectTo: "pet-boarding",
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
