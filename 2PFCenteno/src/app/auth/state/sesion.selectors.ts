import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSesion from './sesion.reducer';

export const selectSesionState = createFeatureSelector<fromSesion.SesionState>(
  fromSesion.sesionFeatureKey
);
