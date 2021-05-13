import { Component, OnInit } from '@angular/core';
import {BouquesCardsDataService} from '../bouques-cards-data.service';
@Component({
  selector: 'app-bouques',
  templateUrl: './bouques.component.html',
  styleUrls: ['./bouques.component.css']
})
export class BouquesComponent implements OnInit {

  constructor(private BouquetObj:BouquesCardsDataService) {
   }

  products:any;
  ngOnInit(): void {
    this.products=this.BouquetObj.getBoquetsCardData();
  }

  data:number=0;
  ListOffavourites:string[]=[];
  getthedetails(x:any)
  {
    this.ListOffavourites.push(x);
    this.data=this.ListOffavourites.length;
  }
  

}
