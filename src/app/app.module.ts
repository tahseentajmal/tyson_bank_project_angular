import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { HttpClientModule } from '@angular/common/http'; // manual import

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    TransactionComponent,
    ConfirmDeleteComponent,
  ],
  imports: [
    BrowserModule,         // For working with DOM on browser
    AppRoutingModule,      // Used for app routing (multiple page app)
    FormsModule,           // Used for two way binding ngmodel , ngsubmit
    ReactiveFormsModule,    // Used for reactive forms
    HttpClientModule       //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
