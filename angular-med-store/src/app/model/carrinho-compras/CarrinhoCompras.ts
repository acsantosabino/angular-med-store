import { Injectable, EventEmitter } from '@angular/core';

class Compra {
    nome: string;
    precoUnit: number;
    quantidade: number;

    constructor( readonly total: number) {}
}

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


export const ELEMENT_DATA: Compra[] = [
    {
      nome: 'Monitor de Pressão Arterial Automático'
      , precoUnit: 239.97
      , quantidade: 5
      , total: 1199.85
    },
    {
      nome: 'Aparelho de Pressão Aneroide com Esteto Solidor'
      , precoUnit: 83.97
      , quantidade: 6
      , total: 503.82
    },
    {
      nome: 'Conjunto Otoscópio e Oftalmoscópio'
      , precoUnit: 1305.75
      , quantidade: 3
      , total: 3917.25
    },
    {
      nome: 'Oxímetro de Pulso de Dedo Portátil Pediátrico'
      , precoUnit: 249.97
      , quantidade: 10
      , total: 2499.70
    },
    {
      nome: 'Mini Incubadora Stermax'
      , precoUnit: 167.97
      , quantidade: 1
      , total: 167.97
    },
    {
      nome: 'Foco de Luz Auxiliar Flexível com Rodas Para Consultório'
      , precoUnit: 388.96
      , quantidade: 4
      , total: 1555.84
    },
    {
      nome: 'Medidor de Colesterol e Glicemia Luna Duo Wellion Rosa'
      , precoUnit: 161.97
      , quantidade: 5
      , total: 809.85
    }
  ];