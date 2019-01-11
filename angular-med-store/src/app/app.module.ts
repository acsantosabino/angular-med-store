import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { CarrinhoIndicadorComponent } from './viewmodel/carrinho-indicador/carrinho-indicador.component';
import { ModelModule } from './model';
import { CarrinhoPageComponent } from './viewmodel/carrinho-page/carrinho-page.component';
import { CarrosselProdutosComponent } from './view/carrossel-produtos/carrossel-produtos.component';
import { ItemProdutoGradeComponent } from './view/item-produto-grade/item-produto-grade.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrinhoIndicadorComponent,
    CarrinhoPageComponent,
    CarrosselProdutosComponent,
    ItemProdutoGradeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
