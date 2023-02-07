import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  ngOnInit(): void { }

  username: any

  // Variables for deposit
  acno_d: any
  pwd_d: any
  amt_d: any

  // Variables for withdrawal
  acno_w: any
  pwd_w: any
  amt_w: any


  constructor(private ds: DataService) {
    this.username = this.ds.user
  }

  // Functions for dashboard

  deposit() {
    var accountno = this.acno_d
    var password = this.pwd_d
    var amount = this.amt_d
    const result = this.ds.deposit(accountno, password, amount)
    if (result) {
      alert(`Your account has been credited with ${amount} and balance is ${result}`)
    }
    else {
      alert("Transaction Declined")
    }
  }

  withdraw() {
    var accountno = this.acno_w
    var password = this.pwd_w
    var amount = this.amt_w
    const result = this.ds.withdraw(accountno, password, amount)
    if (result) {
      alert(`Your account has been debbited with ${amount} and balance is ${result}`)
    }
    else {
      alert("Transaction Declined")
    }
  }
}
