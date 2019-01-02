import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras } from 'src/app/model';

@Component({
  selector: 'app-carrinho-indicador',
  templateUrl: '../../view/carrinho-indicador/carrinho-indicador.component.html',
  styleUrls: ['../../view/carrinho-indicador/carrinho-indicador.component.scss']
})
export class CarrinhoIndicadorComponent implements OnInit {

  protected qntItens = 0;

  constructor(readonly carrinho: CarrinhoCompras) {
    this.updateIndicator(carrinho);
  }

  updateIndicator(carrinho: CarrinhoCompras) {
    this.qntItens = carrinho.getQntItens();
  }

  ngOnInit() {
  }

}
