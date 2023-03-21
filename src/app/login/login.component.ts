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


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) {

  }

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pwd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInIt(): void {

  }

  login() {  // Using Template rendering variable #variable in html

    var acnum = this.loginForm.value.acno
    var password = this.loginForm.value.pwd

    if (this.loginForm.valid) {
      this.ds.login(acnum, password).subscribe((result: any) => {
        // to save acno,uname,toke on client local storage
        localStorage.setItem("currentUser", JSON.stringify(result.username))
        localStorage.setItem("currentAcno", JSON.stringify(result.acno))
        localStorage.setItem("token", JSON.stringify(result.token))
        // function status
        alert(result.message)
        // redirection
        this.router.navigateByUrl("dashboard")
      },
        result => {
          alert(result.error.message)
        })
    }
    else {
      alert("Incorrect Format")
    }
  }
}

