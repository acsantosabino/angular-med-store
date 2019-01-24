import { Injectable } from '@angular/core';
import inventario from '../data/inventario.json';
import { Produto, Compra } from '../model/index.js';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private listaProdutos: Produto[] = inventario;

  constructor() {
    
  }

  public getEstoque(): Produto[] {
    return this.listaProdutos;
  }

  public abaterEstoque(listaCompra: Compra[]) {
    listaCompra.forEach(compra => {
      this.abaterProduto(compra.nome, compra.quantidade);
    });
  }

  private abaterProduto(nome: String, quantidade: number) {
    const index: number = this.listaProdutos.findIndex(this.encontrarProdutoNaListaProduto, nome);
    if (index >= 0) {
      this.listaProdutos[index].estoque -= quantidade;
    }
  }

  private encontrarProdutoNaListaProduto(elemento, index, array) {
    return this === elemento.nome;
  }
}
