import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosService } from './services/alumnos.service';


@NgModule({
  declarations: [
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
