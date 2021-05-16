
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employees1Service {

  constructor(private hc:HttpClient) { }
  getEmp1data()
  {
    return this.hc.get("https://jsonplaceholder.typicode.com/users");
  }
}
