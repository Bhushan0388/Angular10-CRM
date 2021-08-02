import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{UserService} from '../../service/user.service'

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {



  constructor(private userservice:UserService) { }
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
    
    const PostBody=({
      title: frovalues.value.firstname,
      body: frovalues.value.descriptions
    })

    console.log(PostBody);
    
    this.userservice.addUser(PostBody).subscribe(data =>{
      console.log(data);
      

    },(err)=>{
      console.log("Its error");
      
    });
   

  }

  reset(frovalues: NgForm) {
    frovalues.reset();
  }
}
