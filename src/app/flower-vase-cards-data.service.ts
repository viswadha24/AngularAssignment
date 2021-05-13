import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowerVaseCardsDataService {

  constructor() { }

  products=[
   
    {
      image:"https://i.pinimg.com/736x/01/95/c6/0195c6ba8030c7e0c44ba010215e13f1.jpg",
      name:"Sweet Baby Girl",
      price:"Rs.1,117",
    },
    {
      image:"https://i.pinimg.com/564x/58/fd/21/58fd21692fa96b6dcdeab23ed4e61c4e.jpg",
      name:"Carnival of Pink",
      price:"Rs.790",
    },
    {
      image:"https://i.pinimg.com/564x/49/ad/62/49ad62b777b02ff1fd75e56de5ed8ac5.jpg",
      name:"Blooming  Love",
      price:"Rs.3,999",
    },
    {
      image:"https://i.pinimg.com/564x/a6/64/d9/a664d963f3c9f10d69af527a58e08de1.jpg",
      name:"Pink Celebrations",
      price:"Rs.829",
    },
    {
      image:"https://apexworldwide.net/wp-content/uploads/2017/11/BGHE_600x600.jpg",
      name:"Fifty fifty Love",
      price:"Rs.3,159",
    },

    {
      image:"https://i7.fnp.com/images/pr/l/beautiful-red-roses-bunch-in-love-you-sticker-vase_1.jpg",
      name:"Dream Emotions",
      price:"Rs.1,699",
    },

    {
      image:"https://fyf.tac-cdn.net/images/products/small/BF335-11KM-2.jpg?auto=webp&quality=60&width=650",
      name:"White lily Gerbera",
      price:"Rs.1,549",
    },

    {
      image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-flower-delivery-services-1608586490.jpg?crop=0.476xw:0.952xh;0.00801xw,0.0224xh&resize=640:*",
      name:"Luxiorious Bouquet",
      price:"Rs.2,699",
    },


  ]

  getFlowerVaseData()
  {
    return this.products;
  }
}
