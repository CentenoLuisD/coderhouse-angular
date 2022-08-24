import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosService } from './services/alumnos.service';
import { AppMaterialModule } from '../app.material.module';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';


@NgModule({
  declarations: [
    AlumnosComponent,
    EditarDialogComponent,
    CreateDialogComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
