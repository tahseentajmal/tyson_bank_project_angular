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
  dateDetails: any


  // // Variables for deposit (no longer used in component)
  // acno_d: any
  // pwd_d: any
  // amt_d: any

  // // Variables for withdrawal
  // acno_w: any
  // pwd_w: any
  // amt_w: any


  constructor(private ds: DataService, private fb: FormBuilder, private rt: Router) {
    if (localStorage.getItem("currentUser")) {
      this.username = JSON.parse(localStorage.getItem("currentUser") || "")
    }
    this.dateDetails = new Date() // This create a new date variable which can be formatted using angular date pipe
  }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
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
    var acno = this.depositForm.value.acno_d
    var password = this.depositForm.value.pwd_d
    var amount = this.depositForm.value.amt_d
    const result = this.ds.deposit(acno, password, amount)

    if (this.depositForm.valid) {
      this.ds.deposit(acno, password, amount).subscribe((result: any) => {
        alert(result.message)
      },
        result => {
          alert(result.error.message)
        }
      )
    }
    else {
      alert("Invalid Format")
    }

  }

  withdraw() {
    var acno = this.withdrawalForm.value.acno_w
    var password = this.withdrawalForm.value.pwd_w
    var amount = this.withdrawalForm.value.amt_w

    if (this.withdrawalForm.valid) {
      this.ds.withdraw(acno, password, amount).subscribe((result: any) => {
        alert(result.message)
      },
        result => {
          alert(result.error.message)
        }
      )
    }
    else {
      alert("Invalid Format")
    }
  }
  logOut() {
    window.localStorage.removeItem("database")
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("currentUser")
    window.localStorage.removeItem("currentAcno")
    alert("You have successfully logged out.")
    this.rt.navigateByUrl("")
  }

  deleteParent() {
    this.acno = JSON.parse(localStorage.getItem("currentAcno") || '')
    this.username = JSON.parse(localStorage.getItem("currentUser") || '')
  }

  cancel() {
    this.acno = "" // Removes the value of this.acno which causes ngif to fail
  }

  Delete(event: any) {
    // alert(event)
    this.ds.deleteacc(event).subscribe((result: any) => {
      alert(result.message)
      this.rt.navigateByUrl("")
      this.logOut() // Calling logout function inside delete function
    })

  }
}

