import { Component, OnInit } from '@angular/core';
import {CardsDataService} from '../cards-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cardObj:CardsDataService) { }

  cards:any;
  ngOnInit(): void {
    this.cards=this.cardObj.getCardsData();
  }

}
