import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras } from 'src/app/model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrinho-indicador',
  templateUrl: './carrinho-indicador.component.html',
  styleUrls: ['./carrinho-indicador.component.scss']
})
export class CarrinhoIndicadorComponent implements OnInit {

  public qntItens = 0;
  private readonly _listaComprasChangedSubscription: Subscription;

  constructor(
    private carrinho: CarrinhoCompras,
    private router: Router) {

    this._listaComprasChangedSubscription =
      this.carrinho.listaComprasChanged
        .subscribe(listaCompras => {
          this.qntItens = listaCompras.length;
        });
  }

  ngOnInit() {
    // const lista = JSON.parse(window.localStorage.getItem('cart'));
    // this.carrinho.setListaCompras(lista);
  }

  goToCart() {
    this.router.navigateByUrl('/cart');
  }

}
