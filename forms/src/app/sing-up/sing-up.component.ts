import { Component, ElementRef, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.services';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  reactiveForm!: FormGroup
  hide = true
  usuario!: any[];
  durationInSeconds = 5;


  ngOnInit(){
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/)]),
    });
  }

  onSubmit():void{
    const newUser = {
      name: this.username?.value,
      email: this.email?.value,
      password: this.password?.value
    }


    this.userService.addUser(this.email?.value, newUser).subscribe((bool) => {

      const snackConfig:MatSnackBarConfig = {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',

      }


      if (bool) {
        this.snackBar.open('The email is already in use!','', snackConfig);

      } else {
        this.snackBar.open('Account created with success!','',snackConfig);
        this.reactiveForm.reset(undefined, {emitEvent: false});
        this.reactiveForm.markAsPristine();
        this.reactiveForm.markAsUntouched();

      }
    });

  }

  constructor(private userService: UserService, private snackBar:MatSnackBar){

  }

  get username() { return this.reactiveForm.get('username'); }
  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }



  requisitarService(){
  }





}

