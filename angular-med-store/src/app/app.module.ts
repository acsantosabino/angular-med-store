import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module/material-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { CarrinhoIndicadorComponent } from './viewmodel/carrinho-indicador/carrinho-indicador.component';
import { ModelModule } from './model';
import { CarrinhoPageComponent } from './viewmodel/carrinho-page/carrinho-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrinhoIndicadorComponent,
    CarrinhoPageComponent,
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
