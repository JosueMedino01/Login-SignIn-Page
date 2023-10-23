import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [

  {path: 'signup', component: SingUpComponent},
  {path: 'login', component: ReactiveFormsComponent},
  {path: '**', component: SingUpComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
