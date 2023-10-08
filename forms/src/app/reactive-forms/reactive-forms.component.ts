import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




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
      email: new FormControl('carlosmedino13@gmail.io', [Validators.email, Validators.required]),
      password: new FormControl('Ajo123!@#', [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(){


    console.log(this.reactiveForm);
  }

  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }



}



