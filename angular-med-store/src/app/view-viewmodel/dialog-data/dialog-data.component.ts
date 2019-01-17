import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { analyzeAndValidateNgModules } from '@angular/compiler';


export interface DialogData {
  id: '1' | '2' | '3'| '4' | '5' | '6' | '7' | '8' | '9';
  usuario: 'Andres' | 'Sergio' | 'Karla' | 'Diego' | 'Javier' | 'Frank' | 'Viera' | 'Lizeth' | 'Jenny';
}

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})

  export class DialogData {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataDialog, {
      data: {
        usuario: 'andres'
      }
     
    });
  }  


}

@Component({
  selector: 'dialog-data.component-dialog',
  templateUrl: 'dialog-data.component-dialog.html',
  styleUrls: ['./dialog-data.component-dialog.scss']
})

export class DialogDataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}


