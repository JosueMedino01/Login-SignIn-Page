import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.services';
import { ApiResponse } from '../User.interface';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  reactiveForm!: FormGroup
  hide = true
  usuario!: any[];


  ngOnInit(){
    this.reactiveForm = new FormGroup({
      username: new FormControl('Josue Medino', Validators.required),
      email: new FormControl('carlosmedino13@gmail.io', [Validators.email, Validators.required]),
      password: new FormControl('Ajo123!@#', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/)]),
    });
  }

  onSubmit(){


    console.log(this.reactiveForm);
  }

  constructor(private userService: UserService){

  }

  get username() { return this.reactiveForm.get('username'); }
  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }


  requisitarService(){
    this.userService.getUser().subscribe((x:any[]) => {
      this.usuario = x;
    })

    
  }
}
