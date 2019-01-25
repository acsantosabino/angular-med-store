import { Injectable, EventEmitter } from '@angular/core';
import {Compra} from '../compra/Compra';
import { EstoqueService } from 'src/app/services/estoque.service';

@Injectable()
export class CarrinhoCompras {
    private listaCompras: Compra[] = []; // TODO Trocar o tipo por item de compra
    private _listaComprasChanged = new EventEmitter<Compra[]>();

    readonly listaComprasChanged = this._listaComprasChanged.asObservable();

    constructor(private estoque: EstoqueService) {

    }

    getListaCompras() {
        return this.listaCompras;
    }

    getValorTotal() {
        let total = 0;

        this.listaCompras.forEach(compra => {
            total += compra.total;
        });

        return total;
    }

    setListaCompras(lista: Compra[]) {
        this.listaCompras = lista;
        this._listaComprasChanged.emit(this.listaCompras);
    }

    addItem(itemCompra: Compra) {
        const index: number = this.listaCompras.findIndex(this.encontrarItemNaListaCompras, itemCompra.id);
        if (index >= 0) {
            this.updateItem(itemCompra, index);
        } else {
            this.listaCompras.push(itemCompra);
            this._listaComprasChanged.emit(this.listaCompras);
        }
    }

    removeItem(itemCompra: Compra) {
        const index = this.listaCompras.indexOf(itemCompra);
        if (index >= 0) {
            this.listaCompras.splice(index, 1);
            this._listaComprasChanged.emit(this.listaCompras);
        }
    }

    updateItem(itemCompra: Compra, index: number) {
        this.listaCompras[index] = itemCompra;
        this._listaComprasChanged.emit(this.listaCompras);
    }

    finalizarCompra() {
        const listaCompraFinalizada = this.listaCompras;
        this.estoque.abaterEstoque(listaCompraFinalizada);
        this.setListaCompras([]);
    }

  private encontrarItemNaListaCompras(elemento, index, array) {
    return this === elemento.id;
  }
}
