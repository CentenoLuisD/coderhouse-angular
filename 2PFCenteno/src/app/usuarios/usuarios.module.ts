import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromUsuarios from './state/usuarios.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsuariosEffects } from './state/usuarios.effects';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CreateDialogUsuariosComponent } from './components/create-dialog-usuarios/create-dialog-usuarios.component';
import { EditarDialogUsuariosComponent } from './components/editar-dialog-usuarios/editar-dialog-usuarios.component';
import { AppMaterialModule } from '../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuariosComponent,
    CreateDialogUsuariosComponent,
    EditarDialogUsuariosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    UsuariosRoutingModule,
    StoreModule.forFeature(fromUsuarios.usuariosFeatureKey, fromUsuarios.reducer),
    EffectsModule.forFeature([UsuariosEffects])
  ]
})
export class UsuariosModule { }
