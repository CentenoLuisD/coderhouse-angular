import { createAction, props } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';

export const loadAlumnos = createAction(
  '[Alumnos] Load Alumnos'
);

export const alumnosLoaded = createAction(
  '[Alumnos] Alumnos Loaded',
  props<({ alumnos: Alumno[] })>()
);




