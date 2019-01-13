import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras, ELEMENT_DATA_COMPRA } from 'src/app/model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrinho-indicador',
  templateUrl: './carrinho-indicador.component.html',
  styleUrls: ['./carrinho-indicador.component.scss']
})
export class CarrinhoIndicadorComponent implements OnInit {

  protected qntItens = 0;

  constructor(
    private carrinho: CarrinhoCompras,
    private route: ActivatedRoute,
    private router: Router) {
    this.updateIndicator();
  }

  updateIndicator() {
    this.qntItens = this.carrinho.getQntItens();
  }

  ngOnInit() {
    this.carrinho.setListaCompras(ELEMENT_DATA_COMPRA);
    this.updateIndicator();
  }

  goToCart() {
    this.router.navigateByUrl('/cart');
  }

}
