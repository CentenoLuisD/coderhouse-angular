import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripciones from './inscripciones.reducer';

export const selectInscripcionesState = createFeatureSelector<fromInscripciones.InscripcionesState>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectLoadingState = createSelector(
  selectInscripcionesState,
  (state: fromInscripciones.InscripcionesState) => state.loading
);

export const selectLoadedState = createSelector(
  selectInscripcionesState,
  (state: fromInscripciones.InscripcionesState) => state.inscripciones
);
