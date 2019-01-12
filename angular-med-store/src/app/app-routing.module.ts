import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoPageComponent } from './viewmodel/carrinho-page/carrinho-page.component';
import { CompraComponent } from './view/compra/compra.component';
import {HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CarrinhoPageComponent,
    children: [],
  },
  {
    path: 'compra',
    component: CompraComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
