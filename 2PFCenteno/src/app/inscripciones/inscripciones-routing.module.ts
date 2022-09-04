import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';

const routes: Routes = [
  { path: '', component: InscripcionesComponent, children:[ { path: 'lista', component: InscripcionesComponent } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
