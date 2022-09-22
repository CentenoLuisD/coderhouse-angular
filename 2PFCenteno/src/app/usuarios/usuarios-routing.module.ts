import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioUsuariosComponent } from './components/inicio-usuarios/inicio-usuarios.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  { path: '',
    component: UsuariosComponent,
    children: [
      {
        path: 'lista',
        component: UsuariosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
