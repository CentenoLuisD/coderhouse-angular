import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuarios from './usuarios.reducer';

export const selectUsuariosState = createFeatureSelector<fromUsuarios.UsuariosState>(
  fromUsuarios.usuariosFeatureKey
);

export const selectLoadingState = createSelector(
  selectUsuariosState,
  (state: fromUsuarios.UsuariosState) => state.loading
);

export const selectUsuariosArrayState = createSelector(
  selectUsuariosState,
  (state: fromUsuarios.UsuariosState) => state.usuarios
);

export const selectCurrentUserState = createSelector(
  selectUsuariosState,
  (state: fromUsuarios.UsuariosState) => state.usuario
);