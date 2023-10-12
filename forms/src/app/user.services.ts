import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './User.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 readonly url:string;
 response!: any
 booleanShare: any;
 jsonUrl = 'assets/usuarios.json';

 constructor(private httpClient:HttpClient){
  this.url = 'http://localhost:3000/usuarios'



  }

  getUser():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url)
 }

 addUser(email: any, newUser: any): Observable<boolean> {
  return this.httpClient.get<any[]>(this.url).pipe(
    map((data:any) => {
      this.response = data;
      this.booleanShare = this.response.find((x: any) => x['email'] === email);
      return this.booleanShare !== undefined;
      })
    );
  }

}

