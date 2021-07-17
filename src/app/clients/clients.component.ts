import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clinetlist=[
    {id:1, firstname:'Bhushan', lastname:'Khaladkar'},
    {id:2, firstname:'Bob', lastname:'Samuel'},
    {id:3, firstname:'Testing', lastname:'Test'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
