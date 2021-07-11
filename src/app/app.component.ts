import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CRM1';
  
  userObject="Testing for property Binding";
  ImgAlt ="Missing Image"
  show_message=true;
  show_flag=false
  abc=0;
  mycolor="red";
  txtcolor="blue";
  username="Bhushan"

  cuurencydata=250;
  dateNow=Date.now();

  contacts=[
    {
      'firstname':'bhushan',
      'lastname':'k',
      'contactid':'1'
    },
    {
      'firstname':'test',
      'lastname':'k',
      'contactid':'2'
    },
    {
      'firstname':'hh',
      'lastname':'k',
      'contactid':'3'
    }
  ]

  superPower="IronMan" // string 
  tax=10

  clickME(){
    console.log("You clicked me");
  }

  HighlishColor( ){
  
    console.log("YI am being Highlighted");
  }

  InputBox()
  {
    console.log("In Input box");
  }
}
