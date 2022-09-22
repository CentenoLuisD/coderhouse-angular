import { Action, createReducer, on } from '@ngrx/store';
import * as UsuariosActions from './usuarios.actions';

export const usuariosFeatureKey = 'usuarios';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(UsuariosActions.loadUsuarioss, state => state),

);
