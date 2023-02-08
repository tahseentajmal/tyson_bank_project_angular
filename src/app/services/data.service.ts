import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  user:any
  current_acno:any
  userdetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 10000 ,transaction:[] },
    1001: { acno: 1001, username: "manu", password: "abc123", balance: 20000,transaction:[] },
    1002: { acno: 1002, username: "tanu", password: "abc123", balance: 30000,transaction:[] },
    1003: { acno: 1003, username: "fanu", password: "abc123", balance: 40000,transaction:[] },

  }
  register(acno:any,username:any,password:any){
    if(acno in this.userdetails){
      return false
    }
    else{
      this.userdetails[acno]={acno,username,password,balance:0}
      console.log(this.userdetails);
      
      return true
    }
  }

  login(acno:any,password:any){
    var userdetails = this.userdetails
    if (acno in userdetails) {
      if (password === userdetails[acno]["password"]) {
        this.user=userdetails[acno]["username"] // Variable for storing username of logged inn user
        this.current_acno=acno //
        console.log(this.user);
        
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  deposit(acno:any,password:any,amount:any){
    const userDetails=this.userdetails
    if(acno in userDetails){
      if(password === userDetails[acno]["password"]){
        // Update balance
        userDetails[acno]["balance"]+=amount
        // Store transaction data
        userDetails[acno]["transaction"].push({type:"CREDIT",tr_amount:amount})
        // Console Updated data
        console.log(userDetails);
        // Return Balance
        return userDetails[acno]["balance"]
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }
  withdraw(acno:any,password:any,amount:any){
    let userDetails=this.userdetails

    if(acno in userDetails){

      if(password === userDetails[acno]["password"]){

        if(amount<=userDetails[acno]["balance"]){
          // Update Balance
          userDetails[acno]["balance"]-=amount
          // Store transaction data
          userDetails[acno]["transaction"].push({type:"DEBIT",tr_amount:amount})
          // Console Updated data
          console.log(userDetails);
          // Return Balance
          return userDetails[acno]["balance"]
        }
        else{
          alert("Insufficient Balance")
          return false
        }

      }
      else{
        alert("Incorrect Password")
        return false
      }
    }
    else{
      alert("Incorrect AccountNo")
      return false
    }
  }

  getTransaction(acno:any){
    return this.userdetails[acno]["transaction"]
  }
}