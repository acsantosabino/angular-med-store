import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras, Compra, ELEMENT_DATA_COMPRA } from 'src/app/model';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrinho-page',
  templateUrl: './carrinho-page.component.html',
  styleUrls: ['./carrinho-page.component.scss']
})
export class CarrinhoPageComponent implements OnInit {
  public totalCarrinho = 0;
  private readonly _listaComprasChangedSubscription: Subscription;

  constructor(
    protected readonly carrinho: CarrinhoCompras,
    private router: Router) {

    this._listaComprasChangedSubscription =
      this.carrinho.listaComprasChanged
        .subscribe(listaCompras => {
          this.calculaTotal(listaCompras);
        });
  }

  calculaTotal(listaCompras: Compra[]) {
    this.totalCarrinho = 0;
    for (const compra of listaCompras) {
      this.totalCarrinho += compra.total;
    }
  }
  ngOnInit() {
    window.localStorage.setItem('cart', JSON.stringify(ELEMENT_DATA_COMPRA));
    this.calculaTotal(JSON.parse(window.localStorage.getItem('cart')));
    // this.carrinho.setListaCompras(ELEMENT_DATA_COMPRA);
  }

  gotoCompra() {
    this.router.navigateByUrl('/compra');
  }
}
