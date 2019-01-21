import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
}

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})

  export class DialogData {
    title = 'Bienvenidos a Angular Medical Store';
    usuario:any;
    usuarios:any[] = [
       {id: 1, nombre:'Estetoscopio'},
       {id: 2, nombre:'Oximetro'},
       {id: 3, nombre:'Glucometro'},
       {id: 4, nombre:'Termometro'},
       {id: 5, nombre:'Cardiometro'},
       {id: 6, nombre:'Optometro'},
       {id: 7, nombre:'Curetas'},
       {id: 8, nombre:'Bisturies'},
       {id: 9, nombre:'Martelo'}
    ];
    animal:string;
    name:string;

  constructor(public dialog: MatDialog) {}

  openDialog():void {
      const dialogRef = this.dialog.open(
        DialogDataDialog, {
          data:{name:this.name,animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }  
 }

@Component({
  selector: 'dialog-data.component-dialog',
  templateUrl: 'dialog-data.component-dialog.html',
  styleUrls: ['./dialog-data.component-dialog.scss']
})

export class DialogDataDialog {
  
   constructor(
    public dialogRef: MatDialogRef<DialogDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


