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
  terms: boolean = false;
  customerType: string = "";
  descriptions: string = "";

  ngOnInit(): void {
    
  }

  loadvalues(frovalues: NgForm){
    let userData = {
      firstname : "Bhushan",
      terms : false,
      customerType : "",
      descriptions:"My Data"
    }
  frovalues.setValue(userData);
  }

  addCustomer(frovalues: NgForm) {
    console.log(frovalues.value);

  }

  reset(frovalues: NgForm) {
    frovalues.reset();
  }
}
