import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackeBar:MatSnackBar) { }

  showNotification(message:string, bool:boolean){
    this.snackeBar.openFromComponent( NotifierComponent , {
        data:{
          message:message
        },
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: bool ? ['error'] : ['success']
    });
  }
}
