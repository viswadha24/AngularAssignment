import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsDataService {

  constructor() { }


  cards=[
    {
      image:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/p/u/purple_orchid_bunch.jpg",
      name:"Purple Orchid Bunch",
      price:"1,117 Rs",
    },
    {
      image:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/p/e/peach-roses-vase-mfa699.jpg",
      name:"Peach Roses vase",
      price:"1,000 Rs",
    },
    {
      image:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/p/i/pink-carnation--basket.jpg",
      name:"Pink carnation Basket",
      price:"950 Rs",
    },
    {
      image:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/p/r/product-white-asiatic-lilly-1.jpg",
      name:"White Asiatic Lily",
      price:"1,245 Rs",
    },
    {
      image:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/b/l/blue-orchids-bunch-541.jpg",
      name:"Blue Orchid Bunch",
      price:"724 Rs",
    },

  ]
  getCardsData()
  {
    console.log(this.cards);
    return this.cards;
    
  }

}
