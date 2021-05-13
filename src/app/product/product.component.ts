import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  
  @Input() produ:any;
  @Output() MyEvent=new EventEmitter();
  addToFavourites(name:any)
  {
    this.MyEvent.emit(name);
  }

}
