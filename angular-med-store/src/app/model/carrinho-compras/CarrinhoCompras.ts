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
        this._listaComprasChanged.emit(this.listaCompras);
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
        if (index >= 0) {
            this.listaCompras.splice(index, 1);
            this._listaComprasChanged.emit(this.listaCompras);
        } else {
            console.log('Item não encontrado');
            console.log(this.listaCompras);
            console.log(itemCompra);
            console.log(index);
        }
    }

    updateItem(itemCompra: Compra, index: number) {
        this.listaCompras[index] = itemCompra;
        this._listaComprasChanged.emit(this.listaCompras);
    }
}
