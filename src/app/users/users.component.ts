import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  mySubscription:Subscription;
  users:any;
  constructor(private UsObj:UsersDataService,private router:Router) { }

  ngOnInit(): void {

    this.mySubscription= this.UsObj.getUsersdata().subscribe(
      userData=>{
        //assign posts
        this.users=userData;
        console.log("usersComponent.ts"+this.users);
        console.log("usercomponent.ts"+this.users[0])
       
      },
      err=>{
        console.log("err in getting posts data",err)
      }

    )

  }

  onselectId(id)
  {
    console.log("id="+id)
    this.router.navigateByUrl('userdetails/'+id);
  }

  
}
