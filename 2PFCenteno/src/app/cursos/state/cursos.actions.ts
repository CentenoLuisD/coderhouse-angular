import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';

export const loadCursos = createAction(
  '[Cursos] Load Cursos'
);

export const cursosLoaded = createAction(
  '[Cursos] Cursos Loaded',
  props<({ cursos: Curso[] })>()
);




