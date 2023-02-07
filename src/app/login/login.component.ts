import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data = "You perfect banking partner"
  inputplaceholder = "Enter Account Number"

  acno = "" // or acno:any
  password: any  


  constructor(private router:Router,private ds:DataService) {

  }

  ngOnInIt(): void {

  }

  login() {  // Using Template rendering variable #variable in html

    var acnum = this.acno
    var password = this.password

    const result = this.ds.login(acnum,password)

    if(result){
      alert("Login success")
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert("Incorrect Credentials")
    }



    // var userdetails = this.ds.userdetails
    // if (acnum in userdetails) {
    //   if (password === userdetails[acnum]["password"]) {
    //     alert("Login Success")
    //     this.router.navigateByUrl("dashboard") // first dependency inject router module , call navigateByUrl method with refrence
    //   }
    //   else {
    //     alert("Incorrect Password")
    //   }
    // }
    // else {
    //   alert("Account number is incorrect")
    // }
  }


// login(ac:any,pw:any) {  // Using Template rendering variable #variable in html
//     console.log(ac.value);
//     console.log(pw.value);
    
    
//     var acnum = ac.value
//     var password = pw.value
//     var userdetails = this.userdetails
//     if (acnum in userdetails) {
//       if (password === userdetails[acnum]["password"]) {
//         alert("Login Success")
//       }
//       else {
//         alert("Incorrect Password")
//       }
//     }
//     else {
//       alert("Account number is incorrect")
//     }
//   }
}

