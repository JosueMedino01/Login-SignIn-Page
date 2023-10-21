import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 readonly url:string;

 constructor(private httpClient:HttpClient){
  this.url = 'http://localhost:3000/usuarios/'



  }

//Verifica a existencia do email no servidor
 findUser(email:string){
  return this.httpClient.get<User[]>(this.url)
  .pipe(
    map(data =>  (data.find((x: any) => x['email'] === email)))
  )
 }




 adicionarUsuario(dadosUser:any){
  return this.httpClient.post(this.url, dadosUser).pipe(take(1));
 }



}

