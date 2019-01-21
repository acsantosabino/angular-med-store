import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  producto:string;
  nombre:string;
  cantidad:number;
}

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})

  export class DialogData {

    producto:string;
    nombre:string;
    cantidad:number;

  constructor(public dialog: MatDialog) {}

  openDialog():void {
      const dialogRef = this.dialog.open(DialogDataDialog, {
        data: {nombre: this.nombre,producto: this.producto}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.producto = result;
    });
  }  

  gotoCompra() {
  //  this.router.navigateByUrl('/compra');
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


