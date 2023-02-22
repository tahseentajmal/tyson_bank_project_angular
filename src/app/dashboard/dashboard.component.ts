import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  username: any
  acno: any;
  


  // // Variables for deposit
  // acno_d: any
  // pwd_d: any
  // amt_d: any

  // // Variables for withdrawal
  // acno_w: any
  // pwd_w: any
  // amt_w: any


  constructor(private ds: DataService, private fb: FormBuilder,private rt:Router) {
    this.username = this.ds.user
  }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("Please Login to continue")
      this.rt.navigateByUrl("")
    }
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
    var amount = this.depositForm.value.amt_d
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
    var amount = this.withdrawalForm.value.amt_w
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
  logOut(){
    window.localStorage.removeItem("currentUser")
    window.localStorage.removeItem("currentAcno")
    this.rt.navigateByUrl("")
  }

  deleteParent(){
    this.acno=JSON.parse(localStorage.getItem("currentAcno")||'')
    this.username=JSON.parse(localStorage.getItem("currentUser")||'')
  }

  cancel(){
    this.acno="" // Removes the value of this.acno which causes ngif to fail
  }
}
