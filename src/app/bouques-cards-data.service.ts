import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BouquesCardsDataService {

  constructor() { }

  products=[
   
    {
      image:"https://img.floweraura.com/sites/default/files/Same-Day-02-A.jpg?tr=w-264,dpr-1.5,q-70",
      name:"Purple Orchid Bunch",
      price:"Rs.1,117",
    },
    {
      image:"https://img.floweraura.com/sites/default/files/9_0.jpg?tr=w-264,dpr-1.5,q-70",
      name:"Carnival of Pink",
      price:"Rs.790",
    },
    {
      image:"https://img.floweraura.com/sites/default/files/Blooming-Love-B.jpg?tr=w-264,dpr-1.5,q-70",
      name:"Blooming  Love",
      price:"Rs.3,999",
    },
    {
      image:"https://img.floweraura.com/sites/default/files/43.jpg?tr=w-264,dpr-1.5,q-70",
      name:"Pink Celebrations",
      price:"Rs.829",
    },
    {
      image:"https://img.floweraura.com/sites/default/files/fifty-fifty-love-9993300co-080218-A.jpg?tr=w-264,dpr-1.5,q-70",
      name:"Fifty fifty Love",
      price:"Rs.3,159",
    },

    {
      image:"https://img.floweraura.com/sites/default/files/Mother's-Day-Bonanza-B.jpg?tr=w-264,dpr-1.5,q-70",
      name:"Dream Emotions",
      price:"Rs.1,699",
    },

    {
      image:"https://img.floweraura.com/sites/default/files/IMG_1914.JPG?tr=w-264,dpr-1.5,q-70",
      name:"White lily Gerbera",
      price:"Rs.1,549",
    },

    {
      image:"https://img.floweraura.com/sites/default/files/Luxurious-Bouquet-B.jpg?tr=w-264,dpr-1.5,q-70",
      name:"Luxiorious Bouquet",
      price:"Rs.2,699",
    },


  ]
  getBoquetsCardData()
  {
    return this.products;
  }

}
