import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private ds: DataService,private router: Router) { }

  ngOnInit(): void {}

  username_reg:any
  accountno_reg:any
  password_reg:any

  register() {

    // alert("Registration Success")
    // let userDetails = this.ds.userdetails
    var acno = this.accountno_reg
    var uname = this.username_reg
    var pwd = this.password_reg

    // console.log(uname,acno,pwd)
    const result=this.ds.register(acno,uname,pwd) // Called register method from data service module

    if(result){
      alert(`${uname} has successfully registered`)
      this.router.navigateByUrl("")  // Called navigateByUrl method from router Module

    }
    else{
      alert("User already exists, Login to Continue")
      
    }



  }
}
