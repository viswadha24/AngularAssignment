import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details-component.component.html',
  styleUrls: ['./user-details-component.component.css']
})
export class UserDetailsComponentComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private Us:UsersDataService) { }

  ngOnInit(): void {
    console.log(this.ar.snapshot.params+"******")
  }

}
