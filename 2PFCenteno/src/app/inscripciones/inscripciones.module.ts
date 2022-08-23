import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { EditarDialogInscripcionesComponent } from './components/editar-dialog-inscripciones/editar-dialog-inscripciones.component';
import { CreateDialogInscripcionesComponent } from './components/create-dialog-inscripciones/create-dialog-inscripciones.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';


@NgModule({
  declarations: [
    EditarDialogInscripcionesComponent,
    CreateDialogInscripcionesComponent,
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule
  ]
})
export class InscripcionesModule { }
