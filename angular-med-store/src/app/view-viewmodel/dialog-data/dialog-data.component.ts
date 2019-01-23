import { Component, OnInit, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Produto, Compra, CarrinhoCompras } from 'src/app/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-data.component-dialog',
  templateUrl: 'dialog-data.component-dialog.html',
  styleUrls: ['./dialog-data.component-dialog.scss']
})

export class ProdutoDialogComponent {

  public item: Compra;

  constructor(
    public dialogRef: MatDialogRef<ProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) readonly data: Produto,
    protected readonly carrinho: CarrinhoCompras,
    private router: Router) {
      this.item = new Compra(data, 1, data.precoUnit);
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
    estoqueQnt() {
      const lista = Array.from(new Array(this.data.estoque), (val, index) => index + 1);
      return lista;
    }
    changeItemQnt(qnt: number) {
      this.item.quantidade = qnt;
      this.item.total = this.item.precoUnit * qnt;
    }
    gotoCart() {
      this.carrinho.addItem(this.item);
      this.router.navigateByUrl('/cart');
    }
}


