import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

 

  constructor() { }
   firstname: string = "Bhushan";

  ngOnInit(): void {
  }

  addCustomer(frovalues: NgForm){
    console.log(frovalues.value);
    
  }

}
