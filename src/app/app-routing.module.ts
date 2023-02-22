import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},      // http://localhost:4200/dashboard
  {path:"",component:LoginComponent},                   // http://localhost:4200/
  {path:"register",component:RegisterComponent},        // http://localhost:4200/register 
  {path:"transaction",component:TransactionComponent}   // http://localhost:4200/transaction
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
