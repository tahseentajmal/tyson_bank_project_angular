import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  ngOnInit(): void { }

  username: any

  // // Variables for deposit
  // acno_d: any
  // pwd_d: any
  // amt_d: any

  // // Variables for withdrawal
  // acno_w: any
  // pwd_w: any
  // amt_w: any


  constructor(private ds: DataService, private fb: FormBuilder) {
    this.username = this.ds.user
  }

  depositForm = this.fb.group({
    acno_d: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pwd_d: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amt_d: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdrawalForm = this.fb.group({
    acno_w: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pwd_w: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amt_w: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  // Functions for dashboard

  deposit() {
    var accountno = this.depositForm.value.acno_d
    var password = this.depositForm.value.pwd_d
    var amount = this.depositForm.value.acno_d
    const result = this.ds.deposit(accountno, password, amount)

    if (this.depositForm.valid) {
      if (result) {
        alert(`Your account has been credited with ${amount} and balance is ${result}`)
      }
      else {
        alert("Transaction Declined")
      }
    }
    else{
      alert("Invalid Format")
    }

  }

  withdraw() {
    var accountno = this.withdrawalForm.value.acno_w
    var password = this.withdrawalForm.value.pwd_w
    var amount = this.withdrawalForm.value.acno_w
    const result = this.ds.withdraw(accountno, password, amount)
    if (this.withdrawalForm.valid) {
      if (result) {
        alert(`Your account has been debited with ${amount} and balance is ${result}`)
      }
      else {
        alert("Transaction Declined")
      }
    }
    else{
      alert("Invalid Format")
    }
  }
}
