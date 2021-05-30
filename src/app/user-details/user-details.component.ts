import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private Usobj:UsersDataService) { }
  userObj:any;

  ngOnInit(): void {
    console.log(this.ar.snapshot.params.id+"=params");
    let id=this.ar.snapshot.params.id;
    this.Usobj.getPostById(id).subscribe(obj=>{
          this.userObj=obj;
          console.log(this.userObj)
    },err=>{
         console.log("their is an error")
    })
  }



}
