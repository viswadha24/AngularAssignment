import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private hc:HttpClient) { }
  
  getUsersdata()
  {
    console.log("gggggg");
    return this.hc.get("http://localhost:3000/users");
  }


  getPostById(id):Observable<any>{
    console.log(id+"in  server")
    return this.hc.get<any>('http://localhost:3000/users/'+id)
 }

}
