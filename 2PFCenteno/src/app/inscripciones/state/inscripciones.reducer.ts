import { Action, createReducer, on } from '@ngrx/store';
import * as InscripcionesActions from './inscripciones.actions';
import { Inscripcion } from 'src/app/models/inscripcion';

export const inscripcionesFeatureKey = 'inscripciones';

export interface InscripcionesState {
  loading: boolean,
  inscripciones: Inscripcion[]
}

export const initialState: InscripcionesState = {
  loading: false,
  inscripciones: []
};

export const reducer = createReducer(
  initialState,

  on(InscripcionesActions.loadInscripciones, state => {
    return {...state, loading: true}
  }),
  on(InscripcionesActions.inscripcionesLoaded, (state, { inscripciones }) => {
    return {...state, loading: false, inscripciones: inscripciones}
  })

);
