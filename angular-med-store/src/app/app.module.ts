import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './model';
import { HomeComponent,
  CarrinhoIndicadorComponent,
  CarrinhoPageComponent,
  CarrosselProdutosComponent,
  ItemProdutoGradeComponent,
  ListaVerticalComponent, 
  CompraComponent } from './view-viewmodel';
import {DialogData, DialogDataDialog} from './view-viewmodel/dialog-data/dialog-data.component';
 
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
    DialogData, DialogDataDialog
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [DialogData, DialogDataDialog],
    bootstrap: [AppComponent, DialogData ],
  providers: []
})
export class AppModule { }
