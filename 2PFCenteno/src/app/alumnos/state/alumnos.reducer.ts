import { Action, createReducer, on } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import * as AlumnosActions from './alumnos.actions';

export const alumnosFeatureKey = 'alumnos';

export interface AlumnosState {
  loading: boolean,
  alumnos: Alumno[]
}

export const initialState: AlumnosState = {
  loading: false,
  alumnos: []
};

export const reducer = createReducer(
  initialState,

  on(AlumnosActions.loadAlumnos, state => {
    return {...state, loading: true}
  }),
  on(AlumnosActions.alumnosLoaded, (state, { alumnos }) => {
    return {...state, loading: false, alumnos: alumnos}
  }),

);
