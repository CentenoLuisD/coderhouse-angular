import { Action, createReducer, on } from '@ngrx/store';
import * as UsuariosActions from './usuarios.actions';
import { Usuario } from 'src/app/models/usuario';

export const usuariosFeatureKey = 'usuarios';

export interface UsuariosState {
  usuarios: Usuario[],
  loading: boolean,
  usuario: Usuario
}

export const initialState: UsuariosState = {
  usuarios: [],
  loading: false,
  usuario: {id: '', usuario:'', contrasena:'', admin: false}
};

export const reducer = createReducer(
  initialState,

  on(UsuariosActions.loadUsuarios, (state) => {
    return {...state, loading: true}
  }),
  on(UsuariosActions.usuariosLoaded, (state, {usuarios}) => {
    return {...state, loading: false, usuarios: usuarios}
  }),
  on(UsuariosActions.loadUsuario, (state, {usuario}) => {
    return {...state, usuario: usuario}
  })

);
