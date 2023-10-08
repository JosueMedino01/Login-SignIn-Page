import { Component } from '@angular/core';
import { User } from '../User.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements User   {
  name: string = ''
  email:string = ''
  password:string = ''
  bool: boolean = false;



  submit(login:any){
    this.name = login.value.name;
    this.email = login.value.email;
    this.password = login.value.password;



    console.log(login)
  }


}
