import { Component, OnInit } from '@angular/core';
import {FlowerVaseCardsDataService} from '../flower-vase-cards-data.service'

@Component({
  selector: 'app-flowervase',
  templateUrl: './flowervase.component.html',
  styleUrls: ['./flowervase.component.css']
})
export class FlowervaseComponent implements OnInit {

  constructor(private FlowerVaseObj:FlowerVaseCardsDataService) { }

  products:any;
  ngOnInit(): void {
   this.products=this.FlowerVaseObj.getFlowerVaseData();
  }


  data:number=0;
  ListOffavourites:string[]=[];
  getthedetails(x:any)
  {
    this.ListOffavourites.push(x);
    this.data=this.ListOffavourites.length;
  }

}
