import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
 


  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) {

  }

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInIt(): void {

  }

  login() {  // Using Template rendering variable #variable in html

    var acnum = this.loginForm.value.acno
    var password = this.loginForm.value.pwd

    const result = this.ds.login(acnum,password)

      if(this.loginForm.valid){

        if(result){
          alert("Login success")
          this.router.navigateByUrl("dashboard")
        }
        else{
          alert("Incorrect Credentials")
        }
      }
      else{
        alert("Incorrect Format")
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

