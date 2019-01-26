import { Component, OnInit } from '@angular/core';
import { CarrinhoCompras, Compra } from 'src/app/model';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  public totalComprado: number;
  public listaComprado: Compra[];
  public readonly displayedColumns: string[] = [
    'Produto',
    'PrecoUnit',
    'Quantidade',
    'Total'];

  constructor(
    protected readonly carrinho: CarrinhoCompras
    ) {
   }

   calculaTotal() {
     this.totalComprado = 0;
     for (const compra of this.listaComprado) {
       this.totalComprado += compra.total;
     }
   }

  ngOnInit() {
    this.listaComprado = this.carrinho.getListaCompras();
    console.log(this.listaComprado);
    this.calculaTotal();
    this.carrinho.finalizarCompra();
    console.log(this.listaComprado);
  }

}
