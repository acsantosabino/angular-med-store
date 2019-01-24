import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './model';
import {
  HomeComponent,
  CarrinhoIndicadorComponent,
  CarrinhoPageComponent,
  CarrosselProdutosComponent,
  ItemProdutoGradeComponent,
  ListaVerticalComponent,
  CompraComponent,
  ProdutoDialogComponent
} from './view-viewmodel';

import { registerLocaleData } from '@angular/common';


// the second parameter 'fr' is optional
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrinhoIndicadorComponent,
    CarrinhoPageComponent,
    CarrosselProdutosComponent,
    ItemProdutoGradeComponent,
    ListaVerticalComponent,
    CompraComponent,
    ProdutoDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    ProdutoDialogComponent
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class AppModule { }
