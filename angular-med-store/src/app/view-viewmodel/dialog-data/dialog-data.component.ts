import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.sass']
})

  export class DialogData {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
  
}

@Component({
  selector: 'dialog-data.component-dialog',
  templateUrl: 'dialog-data.component-dialog.html',
})

export class DialogDataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}


