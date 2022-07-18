import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { Prueba1Component } from './components/prueba1/prueba1.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    Prueba1Component,
    Prueba2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
