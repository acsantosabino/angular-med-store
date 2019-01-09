import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import { ELEMENT_DATA_PROD, Produto } from './../../model/produto/Produto'
@Component({
  selector: 'app-carrossel-produtos',
  templateUrl: './carrossel-produtos.component.html',
  styleUrls: ['./carrossel-produtos.component.sass']
})
export class CarrosselProdutosComponent implements OnInit {
  produtosExibidos: Produto[];
  length: number = ELEMENT_DATA_PROD.length;
  pageSize: number = 3;
  pageSizeOptions: number[] = [1, 3, 5];

  constructor() {
    console.log(ELEMENT_DATA_PROD)
    console.log('Tamanho: ' + ELEMENT_DATA_PROD.length)
   }

     // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnInit() {
    this.produtosExibidos = this.constroiListaExibicao( ELEMENT_DATA_PROD, 0, this.pageSize )
  }

  mudarPagina(evento){
    let indiceInicio: number = evento.pageIndex * evento.pageSize;
    this.produtosExibidos = 
      this.constroiListaExibicao( ELEMENT_DATA_PROD, indiceInicio, evento.pageSize )
  }

  constroiListaExibicao(listaCheia:Produto[], indiceInicio: number, quantidade:number){
    let listaRetorno: Produto[] = new Array();
    let indice: number = indiceInicio;
    let indiceMaximo: number = (listaCheia.length>=indiceInicio+quantidade)?indiceInicio+quantidade-1:listaCheia.length-1;
    for (indice; indice <= indiceMaximo; indice++) { 
      listaRetorno.push( listaCheia[indice] );
    }
    return listaRetorno;
  }
}
