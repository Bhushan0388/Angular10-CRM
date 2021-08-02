import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service'

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }

  UpdateUser(){
    const PutBody={
      name:'Bob Nam to sunna hi hoga',
      userId:1
    }

    this.userservice.UpdateUser(PutBody).subscribe(data =>{
      console.log(data);
      
    },(err)=>{
      console.log(err.message);
      
    })
  }

}
