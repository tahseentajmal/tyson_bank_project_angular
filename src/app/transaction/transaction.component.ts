import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction_data: any

  constructor(private ds: DataService) {
    this.ds.getTransaction(JSON.parse(localStorage.getItem("currentAcno") || ""))
      .subscribe((result: any) => {
        this.transaction_data = result.transaction
      })
    // this.transaction_data=this.ds.getTransaction(this.ds.current_acno)
    // console.log(this.transaction_data);
  }

  ngOnInit(): void {

  }

}
