import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data = "You perfect banking partner"
  inputplaceholder = "Enter Account Number"
  // acno = "" // or acno:any
  // password: any

  userdetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 10000 },
    1001: { acno: 1001, username: "manu", password: "abc123", balance: 20000 },
    1002: { acno: 1002, username: "tanu", password: "abc123", balance: 30000 },
    1003: { acno: 1003, username: "fanu", password: "abc123", balance: 40000 },

  }

  constructor() {

  }

  ngOnInIt(): void {

  }

  login(ac:any,pw:any) {  // Using Template rendering variable #variable in html
    console.log(ac.value);
    console.log(pw.value);
    
    
    var acnum = ac.value
    var password = pw.value
    var userdetails = this.userdetails
    if (acnum in userdetails) {
      if (password === userdetails[acnum]["password"]) {
        alert("Login Success")
      }
      else {
        alert("Incorrect Password")
      }
    }
    else {
      alert("Account number is incorrect")
    }
  }

  // login() {  using $ event
  //   var acnum = this.acno
  //   var password = this.password
  //   var userdetails = this.userdetails
  //   if (acnum in userdetails) {
  //     if (password === userdetails[acnum]["password"]) {
  //       alert("Login Success")
  //     }
  //     else {
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else {
  //     alert("Account number is incorrect")
  //   }
  // }


  // acnoChange(event: any) {

  //   this.acno = event.target.value
  //   console.log(this.acno);

  // }

  // passwordChange(event: any) {

  //   this.password = event.target.value
  //   console.log(this.password);

  // }

}

