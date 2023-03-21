import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Overloading Headers Globally
const option = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})



export class DataService {

  user: any
  current_acno: any
  userdetails: any

  constructor(private http: HttpClient) { // dependency injection for httpclientmodule

  }


  saveData() {
    if (this.userdetails) {
      localStorage.setItem("database", JSON.stringify(this.userdetails))
    }
    if (this.current_acno) {
      localStorage.setItem("currentAcno", JSON.stringify(this.current_acno))
    }
    if (this.user) {
      localStorage.setItem("currentUser", this.user)
    }
  }
  // getData(){ method used to get data from ls
  //   if(localStorage.getItem("database")){
  //     this.userdetails=JSON.parse(localStorage.getItem('database') || "")
  //   }
  //   if(localStorage.getItem("currentAcno")){
  //     this.current_acno=JSON.parse(localStorage.getItem('currentAcno') || '')
  //   }
  //   if(localStorage.getItem("currentUser")){
  //     this.user=localStorage.getItem('currentUser')
  //   }
  // }

  getToken() {  // Token Accessing Method
    // access token 
    const token = JSON.parse(localStorage.getItem("token") || "")

    // generate header
    let headers = new HttpHeaders()

    if (token) {
      // append token to the header (Overloading)
      option.headers = headers.append("access_token", token)
    }
    return option

  }

  removeData() {
    if (localStorage.getItem("database")) {
      localStorage.removeItem('database')
    }
    if (localStorage.getItem("currentAcno")) {
      localStorage.removeItem('currentAcno')
    }
    if (localStorage.getItem("currentUser")) {
      localStorage.removeItem('database')
    }
  }




  register(acno: any, username: any, password: any) {
    // Create Http Body Data
    const data = { acno, username, password }
    return this.http.post("http://localhost:3001/register", data)
  }

  login(acno: any, password: any) {
    const data = { acno, password }
    return this.http.post("http://localhost:3001/login", data)
  }

  deposit(acno: any, password: any, amount: any) {
    const data = { acno, password, amount }
    return this.http.post("http://localhost:3001/deposit", data, this.getToken())
  }

  withdraw(acno: any, password: any, amount: any) {
    const data = { acno, password, amount }
    return this.http.post("http://localhost:3001/withdraw", data, this.getToken())
  }

  getTransaction(acno: any) {
    const data = { acno }
    return this.http.post("http://localhost:3001/getTransaction", data, this.getToken())
  }

  deleteacc(acno:any){
    return this.http.delete(`http://localhost:3001/delete/`+acno,this.getToken())
  }
  
}