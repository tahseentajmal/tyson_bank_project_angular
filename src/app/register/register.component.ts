import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void { }


  // Creater reactive Form for Register
  registerForm = this.fb.group({

    username_reg: ['', [Validators.required, Validators.pattern('[a-zA-z]+')]],
    accountno_reg: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    password_reg: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]


  })


  register() {

    // alert("Registration Success")
    // let userDetails = this.ds.userdetails
    var acno = this.registerForm.value.accountno_reg
    var uname = this.registerForm.value.username_reg
    var pwd = this.registerForm.value.password_reg

    if (this.registerForm.valid) {

      // Called register method from data service module
      this.ds.register(acno, uname, pwd).subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl("")
      },
        result => {
          alert(result.error.message)
          this.router.navigateByUrl("")
        }
      )
    }
    else {
      alert("Invalid Form")
    }
  }
}
