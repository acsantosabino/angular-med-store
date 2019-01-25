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

  public getProdutoDeCompra( compra: Compra): Produto {
    const index: number = this.listaProdutos.findIndex(this.encontrarProdutoNaListaProduto, compra.id);
    return this.listaProdutos[index];
  }

  public abaterEstoque(listaCompra: Compra[]) {
    listaCompra.forEach(compra => {
      this.abaterProduto(compra.id, compra.quantidade);
    });
  }

  private abaterProduto(id: number, quantidade: number) {
    const index: number = this.listaProdutos.findIndex(this.encontrarProdutoNaListaProduto, id);
    if (index >= 0) {
      this.listaProdutos[index].estoque -= quantidade;
    }
  }

  private encontrarProdutoNaListaProduto(elemento, index, array) {
    return this === elemento.id;
  }
}
