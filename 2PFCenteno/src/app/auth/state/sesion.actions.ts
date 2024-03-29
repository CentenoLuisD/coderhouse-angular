import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const loadSesion = createAction(
  '[Sesion] Load Sesion',
  props<{usuarioActivo: Usuario}>() 
);

export const closeSesion = createAction(
  '[Sesion] Close Sesion'
);




