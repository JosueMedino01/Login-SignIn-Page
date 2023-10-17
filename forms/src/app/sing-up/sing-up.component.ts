import { Component, ElementRef, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.services';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { config } from 'rxjs';
import { NotifierService } from '../notifier.service';
import { Router } from '@angular/router';



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
  title = 'sign in'


  ngOnInit(){
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/)]),
    });
  }

  onSubmit():void{

    if(this.reactiveForm.status == "INVALID"){
      return;
    }

    const newUser = {
      name: this.username?.value,
      email: this.email?.value,
      password: this.password?.value
    }



    this.userService.addUser(this.email?.value, newUser).subscribe((bool) => {

      if (bool) {
        this.notifierService.showNotification("The email is already in use!", bool);

      } else {
        //this.snackBar.open('Account created with success!','',snackConfig);

        this.notifierService.showNotification("Account created with success!", bool)
        this.reactiveForm.reset(undefined, {emitEvent: false});
        this.reactiveForm.markAsPristine();
        this.reactiveForm.markAsUntouched();
        this.redirecionarLogin();

      }
    });



  }

  constructor(private userService: UserService, private snackBar:MatSnackBar, private notifierService:NotifierService, private router:Router){

  }

  get username() { return this.reactiveForm.get('username'); }
  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }



  requisitarService(){
  }


  redirecionarLogin(){
    this.router.navigate(['login'])
  }


}

