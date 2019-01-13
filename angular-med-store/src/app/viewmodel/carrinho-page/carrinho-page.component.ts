import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras, Compra, ELEMENT_DATA_COMPRA } from 'src/app/model';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrinho-page',
  templateUrl: '../../view/carrinho-page/carrinho-page.component.html',
  styleUrls: ['../../view/carrinho-page/carrinho-page.component.scss']
})
export class CarrinhoPageComponent implements OnInit {

  protected dataSource: MatTableDataSource<Compra>;
  private readonly _listaComprasChangedSubscription: Subscription;
  protected displayedColumns: string[] = [
    'Produto',
    'PrecoUnit',
    'Quantidade',
    'Total'];

  constructor(private carrinho: CarrinhoCompras,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.dataSource = new MatTableDataSource(this.carrinho.getListaCompras());

    this._listaComprasChangedSubscription =
      this.carrinho.listaComprasChanged
        .subscribe(listaCompras => {
          this.dataSource = new MatTableDataSource(listaCompras);
        });

  }

  ngOnInit() {
    this.carrinho.setListaCompras(ELEMENT_DATA_COMPRA);
  }

  estoqueQnt(estoque: number) {
    const lista = Array.from(new Array(estoque), (val, index) => index + 1);
    return lista;
  }

  totalCarrinho() {
    let totalCarrinho = 0;

    for (const compra of this.dataSource.data) {
      totalCarrinho += compra.total;
    }

    return totalCarrinho;
  }

  removeItem(item: Compra) {
    this.carrinho.removeItem(item);
  }

  changeItemQnt(item: Compra, qnt: number) {
    const index = this.dataSource.data.indexOf(item);
    item.quantidade = qnt;
    item.total = item.precoUnit * qnt;
    this.carrinho.updateItem(item, qnt);
  }
  gotoCompra() {
    this.router.navigateByUrl('/compra');
  }
}
