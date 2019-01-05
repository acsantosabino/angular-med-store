import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras, Compra, ELEMENT_DATA_COMPRA } from 'src/app/model';

@Component({
  selector: 'app-carrinho-page',
  templateUrl: '../../view/carrinho-page/carrinho-page.component.html',
  styleUrls: ['../../view/carrinho-page/carrinho-page.component.scss']
})
export class CarrinhoPageComponent implements OnInit {

  protected dataSource: Compra[];
  protected displayedColumns: string[] = [
    'Produto',
    'PrecoUnit',
    'Quantidade',
    'Total'];

  constructor(private carrinho: CarrinhoCompras) {
    this.updateLista();
  }

  updateLista() {
    this.dataSource = this.carrinho.getListaCompras();
  }

  ngOnInit() {
    this.carrinho.setListaCompras(ELEMENT_DATA_COMPRA);
    this.updateLista();
  }

  estoqueQnt(estoque: number) {
    const lista = Array.from(new Array(estoque), (val, index) => index + 1);
    return lista;
  }

  totalCarrinho() {
    let totalCarrinho = 0;

    for (const compra of this.dataSource) {
      totalCarrinho += compra.total;
    }

    return totalCarrinho;
  }
}
