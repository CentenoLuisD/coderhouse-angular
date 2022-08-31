import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaComponent } from './components/lista/lista.component';
import { AppMaterialModule } from '../app-material.module';
import { DialogEditarComponent } from './components/dialog-editar/dialog-editar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaComponent,
    DialogEditarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
