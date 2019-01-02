import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module/material-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoIndicadorComponent } from './viewmodel/carrinho-indicador/carrinho-indicador.component';
import { ModelModule } from './model';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoIndicadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
