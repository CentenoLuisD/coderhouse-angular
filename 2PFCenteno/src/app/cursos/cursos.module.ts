import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { CreateDialogCursosComponent } from './components/create-dialog-cursos/create-dialog-cursos.component';
import { EditarDialogCursosComponent } from './components/editar-dialog-cursos/editar-dialog-cursos.component';
import { AppMaterialModule } from '../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursosComponent,
    CreateDialogCursosComponent,
    EditarDialogCursosComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
