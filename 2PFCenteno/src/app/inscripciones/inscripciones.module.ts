import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { EditarDialogInscripcionesComponent } from './components/editar-dialog-inscripciones/editar-dialog-inscripciones.component';
import { CreateDialogInscripcionesComponent } from './components/create-dialog-inscripciones/create-dialog-inscripciones.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { AppMaterialModule } from '../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromInscripciones from './state/inscripciones.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './state/inscripciones.effects';


@NgModule({
  declarations: [
    EditarDialogInscripcionesComponent,
    CreateDialogInscripcionesComponent,
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    InscripcionesRoutingModule,
    StoreModule.forFeature(fromInscripciones.inscripcionesFeatureKey, fromInscripciones.reducer),
    EffectsModule.forFeature([InscripcionesEffects])
  ]
})
export class InscripcionesModule { }
