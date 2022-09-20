import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursos from './cursos.reducer';

export const selectCursosState = createFeatureSelector<fromCursos.CursosState>(
  fromCursos.cursosFeatureKey
);

export const selectLoadingState = createSelector(
  selectCursosState,
  (state: fromCursos.CursosState) => state.loading
);

export const selectLoadedState = createSelector(
  selectCursosState,
  (state: fromCursos.CursosState) => state.cursos
);