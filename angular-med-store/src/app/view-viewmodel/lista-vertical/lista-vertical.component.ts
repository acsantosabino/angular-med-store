import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras, Compra } from 'src/app/model';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { EstoqueService } from 'src/app/services/estoque.service';
import { ProdutoDialogComponent } from '../dialog-data/dialog-data.component';

@Component({
  selector: 'app-lista-vertical',
  templateUrl: './lista-vertical.component.html',
  styleUrls: ['./lista-vertical.component.scss']
})
export class ListaVerticalComponent implements OnInit {

  protected key = 'cart';
  public dataSource: MatTableDataSource<Compra>;
  private readonly _listaComprasChangedSubscription: Subscription;
  public readonly displayedColumns: string[] = [
    'Produto',
    'PrecoUnit',
    'Quantidade',
    'Total'];

  constructor(private carrinho: CarrinhoCompras,
    private estoque: EstoqueService,
    public dialog: MatDialog ) {
    this.dataSource = new MatTableDataSource(this.carrinho.getListaCompras());

    this._listaComprasChangedSubscription =
      this.carrinho.listaComprasChanged
        .subscribe(listaCompras => {
          // window.localStorage.setItem(this.key, JSON.stringify(listaCompras));
          this.dataSource = new MatTableDataSource(listaCompras);
        });

  }

  ngOnInit() {
  }

  estoqueQnt(estoque: number) {
    const lista = Array.from(new Array(estoque), (val, index) => index + 1);
    return lista;
  }

  removeItem(item: Compra) {
    this.carrinho.removeItem(item);
  }

  changeItemQnt(item: Compra, qnt: number) {
    const index = this.dataSource.data.indexOf(item);
    item.quantidade = qnt;
    item.total = item.precoUnit * qnt;
    this.carrinho.updateItem(item, index);
  }
  openDialog(item: Compra): void {
    const produto = this.estoque.getProdutoDeCompra(item);
    const dialogRef = this.dialog.open(ProdutoDialogComponent, {
      data: produto
    });
  }
}
