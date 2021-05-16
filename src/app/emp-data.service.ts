import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {


  constructor(private hcObj:HttpClient) { }

  GetEmpDetails():Observable<any>{
    return this.hcObj.get("https://reqres.in/api/unknown");
  }
}
