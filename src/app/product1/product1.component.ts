import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
  @Input() produ:any;
  @Output() MyEvent=new EventEmitter();
  addToFavourites(name:any)
  {
    this.MyEvent.emit(name);
  }


}
