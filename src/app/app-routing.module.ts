import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent}, // http://localhost:4200/dashboard
  {path:"",component:LoginComponent},              // http://localhost:4200/
  {path:"register",component:RegisterComponent},    // htpps://localhost:4200/register 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
