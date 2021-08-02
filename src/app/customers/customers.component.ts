import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  userlist:any;

  constructor(private userservice: UserService) { 
 
    
  }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(data=>{
      this.userlist=data;
    }, (err)=>{
      console.log("Unable to get data from URL" + err.message);
      
    });
    console.log(this.userlist);
  }

}
