import { Component, ElementRef, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.services';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { EMPTY, Observable, Subject, catchError, config } from 'rxjs';
import { NotifierService } from '../notifier.service';
import { Router } from '@angular/router';

import { v4 as uuidv4 } from 'uuid';

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
      this.notifierService.showNotification("Please Review. Form Invalid", true);
      return;
    }

    const newUser = {
      id: uuidv4(),
      name: this.username?.value,
      email: this.email?.value,
      password: this.password?.value
    }

    this.adicionarUsuario(this.email?.value, newUser)

  }

  constructor(private userService: UserService, private snackBar:MatSnackBar, private notifierService:NotifierService, private router:Router){}



  adicionarUsuario(email:string, dataNewUser:any){
    //Faz referência com o Observable e se Increve
    this.userService.findUser(email)

    //Tratamento do erro
    .pipe(
      catchError(error => {
        this.notifierService.showNotification("Error with request HTTP!", true)
        return EMPTY;
      })
    )

    //Inscreve-se no Observable
    .subscribe(userData => {

      if(userData === undefined){
        //Caso não exista user, add o novo usuario
        this.userService.adicionarUsuario(dataNewUser).subscribe(
          success => console.log('Sucesso'),
          error => console.error(error),
          () => console.log("Request Completo")
        )

        this.notifierService.showNotification("Account created with success!", false)
        this.reactiveForm.reset(undefined, {emitEvent: false});

        this.redirecionarLogin();

      } else {
        //Caso já exista usuário, mensagem de erro
        this.notifierService.showNotification("The email is already in use!", true);
      }
    })
  }



  redirecionarLogin(){
    this.router.navigate(['login'])
  }

  get username() { return this.reactiveForm.get('username'); }
  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }
}

