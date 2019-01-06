import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module/material-module.module';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoIndicadorComponent } from './viewmodel/carrinho-indicador/carrinho-indicador.component';
import { ModelModule } from './model';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

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
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- Para fins de debug
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
