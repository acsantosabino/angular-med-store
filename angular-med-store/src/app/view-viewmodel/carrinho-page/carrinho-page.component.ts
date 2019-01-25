import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras, Compra } from '../../model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    this.calculaTotal(this.carrinho.getListaCompras());
  }

  gotoCompra() {
    this.carrinho.finalizarCompra();
    this.router.navigateByUrl('/compra');
  }
}
