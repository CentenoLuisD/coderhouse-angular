import { Action, createReducer, on } from '@ngrx/store';
import * as CursosActions from './cursos.actions';
import { Curso } from 'src/app/models/curso';

export const cursosFeatureKey = 'cursos';

export interface CursosState {
  loading: boolean,
  cursos: Curso[]
}

export const initialState: CursosState = {
  loading: false,
  cursos: []
};

export const reducer = createReducer(
  initialState,
  on(CursosActions.loadCursos, state => {
    return {...state, loading: true}
  }),
  on(CursosActions.cursosLoaded, (state, { cursos }) => {
    return {...state, loading: false, cursos: cursos}
  })

);
