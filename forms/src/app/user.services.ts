import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './User.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 readonly url:string;


 constructor(private httpClient:HttpClient){
  this.url = 'http://localhost:3000/usuarios'

  }

  getUser():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url)
 }

 

}
