import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosService } from './services/alumnos.service';
import { AppMaterialModule } from '../app.material.module';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { AlumnosInicioComponent } from './components/alumnos-inicio/alumnos-inicio.component';
import { Alumnos2Component } from './components/alumnos2/alumnos2.component';
import { StoreModule } from '@ngrx/store';
import * as fromAlumnos from './state/alumnos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from './state/alumnos.effects';



@NgModule({
  declarations: [
    AlumnosComponent,
    EditarDialogComponent,
    CreateDialogComponent,
    AlumnosInicioComponent,
    Alumnos2Component
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromAlumnos.alumnosFeatureKey, fromAlumnos.reducer),
    EffectsModule.forFeature([AlumnosEffects])
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
