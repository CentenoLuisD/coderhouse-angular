import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosInicioComponent } from './components/alumnos-inicio/alumnos-inicio.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { Alumnos2Component } from './components/alumnos2/alumnos2.component';

const routes: Routes = [
  { path: '', 
    component: Alumnos2Component, 
    children:[
      // { 
      // path: 'lista', 
      // component: AlumnosComponent,
      // pathMatch: 'full' 
      // },
      { 
        path: 'lista2', 
        component: Alumnos2Component,
        pathMatch: 'full' 
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
