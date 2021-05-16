import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:any;
  key:Observable<any>;
  constructor(private empObj:EmpDataService) { }

  ngOnInit(): void {
    this.empObj.GetEmpDetails().subscribe(
      Empdata=>{this.employees=Empdata;
      console.log(this.employees)
      console.log(this.employees)
    }
      ,
    err=>{
      console.log("err in getting colors data",err)
    }
     );
  }

}
