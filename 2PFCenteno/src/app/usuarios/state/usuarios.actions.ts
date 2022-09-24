import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const loadUsuarios = createAction(
  '[Usuarios] Load Usuarios'
);

export const usuariosLoaded = createAction(
  '[Usuarios] Usuarios loaded ',
  props<({ usuarios: Usuario[] })>()
);

export const loadUsuario = createAction(
  '[Usuarios] Usuario loaded ',
  props<({ usuario: Usuario })>()
);




