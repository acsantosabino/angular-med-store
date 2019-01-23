import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import { Produto } from './../../model/produto/Produto';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
  selector: 'app-carrossel-produtos',
  templateUrl: './carrossel-produtos.component.html',
  styleUrls: ['./carrossel-produtos.component.scss']
})
export class CarrosselProdutosComponent implements OnInit {
  inventario: Produto[];
  produtosExibidos: Produto[];
  length: number;
  pageSize = 3;
  pageSizeOptions: number[] = [3, 5];

  constructor(estoque: EstoqueService) {
    this.inventario = estoque.getEstoque();
    this.length = this.inventario.length;
   }

     // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnInit() {
    this.produtosExibidos = this.constroiListaExibicao( this.inventario, 0, this.pageSize );
  }

  mudarPagina(evento) {
    const indiceInicio: number = evento.pageIndex * evento.pageSize;
    this.produtosExibidos =
      this.constroiListaExibicao( this.inventario, indiceInicio, evento.pageSize );
  }

  constroiListaExibicao(listaCheia: Produto[], indiceInicio: number, quantidade: number) {
    const listaRetorno: Produto[] = new Array();
    let indice: number = indiceInicio;
    const indiceMaximo: number = (listaCheia.length >= indiceInicio + quantidade) ? indiceInicio + quantidade - 1 : listaCheia.length - 1;
    for (indice; indice <= indiceMaximo; indice++) {
      listaRetorno.push( listaCheia[indice] );
    }
    return listaRetorno;
  }
}
