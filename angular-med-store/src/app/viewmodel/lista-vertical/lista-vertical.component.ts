import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras, ELEMENT_DATA_COMPRA } from 'src/app/model';

@Component({
  selector: 'app-lista-vertical',
  templateUrl: './lista-vertical.component.html',
  styleUrls: ['./lista-vertical.component.less']
})
export class ListaVerticalComponent implements OnInit {
  protected dataSource = [];
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

}
