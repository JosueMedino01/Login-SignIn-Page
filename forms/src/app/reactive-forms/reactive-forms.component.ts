import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.services';
import { NotifierService } from '../notifier.service';




@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  reactiveForm!: FormGroup
  hide = true;
  labelPosition: 'before' | 'after' = 'before';

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(){
    if(this.reactiveForm.status === "INVALID"){
      this.notifierService.showNotification("Please fill out all the information", true);
      return;
    }

    this.userService.findUser(this.email?.value)
    .subscribe(userData => {
      //Caso o email solicitado nao seja encontrado
      if(userData === undefined){
        this.notifierService.showNotification("Email not found!", true);
        return;
      }

      if(userData.password === this.password?.value){
        this.notifierService.showNotification("Connected!", false);
      } else {
        this.notifierService.showNotification("Incorrect Password!", true);
      }

    })
  }

  constructor(private userService:UserService, private notifierService:NotifierService){}

  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }



}



