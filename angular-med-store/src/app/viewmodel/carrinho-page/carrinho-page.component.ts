import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras, ELEMENT_DATA_COMPRA } from 'src/app/model';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-carrinho-page',
  templateUrl: '../../view/carrinho-page/carrinho-page.component.html',
  styleUrls: ['../../view/carrinho-page/carrinho-page.component.scss']
})
export class CarrinhoPageComponent implements OnInit {

  protected dataSource = [];
  protected displayedColumns: string[] = [
    'Nome',
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

}
