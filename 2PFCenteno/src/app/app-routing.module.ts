import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'inicio', component: MainComponent, canActivate: [AuthGuard]},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosModule), canActivate: [AuthGuard]
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosModule), canActivate: [AuthGuard]
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then( m => m.InscripcionesModule), canActivate: [AuthGuard]
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
