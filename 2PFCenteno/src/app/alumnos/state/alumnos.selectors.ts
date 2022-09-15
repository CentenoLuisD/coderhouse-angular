import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import * as fromAlumnos from './alumnos.reducer';

export const selectAlumnosState = createFeatureSelector<fromAlumnos.AlumnosState>(
  fromAlumnos.alumnosFeatureKey
);

export const selectLoadingState = createSelector(
  selectAlumnosState,
  (state: fromAlumnos.AlumnosState) => state.loading
);

export const selectLoadedState = createSelector(
  selectAlumnosState,
  (state: fromAlumnos.AlumnosState) => state.alumnos
);
