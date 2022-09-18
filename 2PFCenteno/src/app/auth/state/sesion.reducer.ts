import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import * as SesionActions from './sesion.actions';

export const sesionFeatureKey = 'sesion';

export interface SesionState {
  sesionActiva: boolean
  usuarioActivo?: Usuario
}

export const initialState: SesionState = {
  sesionActiva: false
};

export const reducer = createReducer(
  initialState,
  on(SesionActions.loadSesion, (state, {usuarioActivo}) => {
    return {...state, sesionActiva: true, usuarioActivo: usuarioActivo}
  }),
  on(SesionActions.closeSesion, (state) => {
    return {...state, sesionActiva: false, usuarioActivo: {id:'', usuario: '', contrasena:'', admin: false}}
  })
);


