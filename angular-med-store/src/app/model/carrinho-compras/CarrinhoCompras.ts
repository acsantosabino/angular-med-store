import { Injectable, EventEmitter } from '@angular/core';
import {Compra} from '../compra/Compra';

@Injectable()
export class CarrinhoCompras {
    private listaCompras: Compra[] = []; // TODO Trocar o tipo por item de compra
    private _listaComprasChanged = new EventEmitter<Compra[]>();

    readonly listaComprasChanged = this._listaComprasChanged.asObservable();


    getListaCompras() {
        return this.listaCompras;
    }

    getQntItens() {
        return this.listaCompras.length;
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
        return this.getQntItens();
    }

    addItem(itemCompra: Compra) {
        this.listaCompras = [
            ...this.listaCompras,
            itemCompra
        ];
        this._listaComprasChanged.emit(this.listaCompras);
    }

    removeItem(itemCompra: Compra) {
        const index = this.listaCompras.indexOf(itemCompra);

        const newArray = (index > -1) ? [
            ...this.listaCompras.slice(0, index),
            ...this.listaCompras.slice(index + 1)
        ] : this.listaCompras;
        this._listaComprasChanged.emit(this.listaCompras);
    }
}
