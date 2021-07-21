import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  color = "red";
  priceTo = 0;
  size = 0;
  priceFrom = 0;

  constructor(private activatedRoute: ActivatedRoute) {
   this.activatedRoute.queryParams.subscribe(params=>{
     this.color=params.color;
     this.size=params.size;
     this.priceTo=params.priceTo;
     this.priceFrom=params.priceFrom;
   })
  }

  ngOnInit(): void {
  }

  // check if form is dirty
  isDirty=true;

}
