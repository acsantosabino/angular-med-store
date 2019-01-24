import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProdutoDialogComponent } from 'src/app/view-viewmodel/dialog-data/dialog-data.component';
import { Produto } from 'src/app/model';

@Component({
  selector: 'app-item-produto-grade',
  templateUrl: './item-produto-grade.component.html',
  styleUrls: ['./item-produto-grade.component.scss']
})
export class ItemProdutoGradeComponent implements OnInit {
  @Input() produto: Produto;
  constructor(public dialog: MatDialog) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProdutoDialogComponent, {
      data: this.produto
  });

  // dialogRef.afterClosed().subscribe(result => {
  //   console.log('The dialog was closed');
  //   // this.producto = result;
  // });
}

  ngOnInit() {
  }

}
