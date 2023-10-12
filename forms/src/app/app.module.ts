import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIAL
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { SingUpComponent } from './sing-up/sing-up.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const MATERIAL_ANGULAR = [MatInputModule,MatFormFieldModule,MatButtonModule,MatIconModule,MatCheckboxModule,MatSnackBarModule]

//Requisições
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ReactiveFormsComponent,
    SingUpComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...MATERIAL_ANGULAR,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
