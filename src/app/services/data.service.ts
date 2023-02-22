import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
    this.getData()
  }

  user:any
  current_acno:any
  // userdetails:any
  userdetails: any = {
    // 1000: { acno: 1000, username: "anu", password: "abc123", balance: 10000 ,transaction:[] },
    // 1001: { acno: 1001, username: "manu", password: "abc123", balance: 20000,transaction:[] },
    // 1002: { acno: 1002, username: "tanu", password: "abc123", balance: 30000,transaction:[] },
    // 1003: { acno: 1003, username: "fanu", password: "abc123", balance: 40000,transaction:[] },

   }
  saveData(){
    if(this.userdetails){
      localStorage.setItem("database",JSON.stringify(this.userdetails))
    }
    if(this.current_acno){
      localStorage.setItem("currentAcno",JSON.stringify(this.current_acno))
    }
    if(this.user){
      localStorage.setItem("currentUser",this.user)
    }
  }
  getData(){
    if(localStorage.getItem("database")){
      this.userdetails=JSON.parse(localStorage.getItem('database') || "")
    }
    if(localStorage.getItem("currentAcno")){
      this.current_acno=JSON.parse(localStorage.getItem('currentAcno') || '')
    }
    if(localStorage.getItem("currentUser")){
      this.user=localStorage.getItem('currentUser')
    }
  }
  removeData(){
    if(localStorage.getItem("database")){
      localStorage.removeItem('database')
    }
    if(localStorage.getItem("currentAcno")){
      localStorage.removeItem('currentAcno')
    }
    if(localStorage.getItem("currentUser")){
      localStorage.removeItem('database')
    }
  }




  register(acno:any,username:any,password:any){
    if(acno in this.userdetails){
      return false
    }
    else{
      this.userdetails[acno]={acno,username,password,balance:0,transaction: []}
      console.log(this.userdetails);
      this.saveData()
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
        this.saveData()
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
        // Save data in Local Storage
        this.saveData()
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
          // Save data in Local Storage
          this.saveData()
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
    else{
      return false
    }
  }

  getTransaction(acno:any){
    return this.userdetails[acno]["transaction"]
  }

}