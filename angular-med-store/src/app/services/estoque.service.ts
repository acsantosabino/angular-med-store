import { Injectable } from '@angular/core';
import inventario from '../data/inventario.json';
import { Produto } from '../model/index.js';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private listaProdutos: Produto[];
  
  constructor() { 
    this.listaProdutos = inventario;
  }

  public getEstoque(): Produto[]{
    return this.listaProdutos;
  }
}
