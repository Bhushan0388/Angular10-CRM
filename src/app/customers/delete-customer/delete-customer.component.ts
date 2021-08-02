import { Component, OnInit } from '@angular/core';
import{UserService} from '../../service/user.service'

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }

  deleteUser(){
    
    this.userservice.DeleteUser(1).subscribe(data=>{
      console.log(data);
      
    },(err)=>{

    })
  }

}
