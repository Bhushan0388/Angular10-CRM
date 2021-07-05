import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CRM1';

  show_message=true;
  show_flag=false

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
}
