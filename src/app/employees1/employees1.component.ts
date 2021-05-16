import { Component, OnInit } from '@angular/core';
import { Employees1Service } from '../employees1.service';

@Component({
  selector: 'app-employees1',
  templateUrl: './employees1.component.html',
  styleUrls: ['./employees1.component.css']
})
export class Employees1Component implements OnInit {

  constructor(private empObj:Employees1Service) { }

  employees:any;
  empObj1:any;
  ngOnInit(): void {
     this.empObj.getEmp1data().subscribe(data=>{
       this.employees=data;
       console.log(this.employees);
       
       console.log(this.employees[1].name)
     },err=>{
       console.log("err in the employees data",err);
     });
  }
 
  // getdata(a:number)
  // {
  //     this.empObj1=this.employees[a];
  //     //console.log(this.employees[a])
  // }

}
