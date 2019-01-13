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
  ItemProdutoGradeComponent } from './view-viewmodel';
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
