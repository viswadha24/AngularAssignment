import { Component, OnInit } from '@angular/core';
import {FlowerCardsDataService} from '../flower-cards-data.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {

  constructor(private FlowerObj:FlowerCardsDataService) { }

  products:any;
  ngOnInit(): void {
    this.products=this.FlowerObj.getFlowerCardData();
  }

 
  data:number=0;
  ListOffavourites:string[]=[];
  getthedetails(x:any)
  {
    this.ListOffavourites.push(x);
    this.data=this.ListOffavourites.length;
  }

}
