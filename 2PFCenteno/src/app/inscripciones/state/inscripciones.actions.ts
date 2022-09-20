import { createAction, props } from '@ngrx/store';
import { Inscripcion } from 'src/app/models/inscripcion';

export const loadInscripciones = createAction(
  '[Inscripciones] Load Inscripciones'
);

export const inscripcionesLoaded = createAction(
  '[Inscripciones] Inscripciones Cargadas',
  props<({inscripciones: Inscripcion[]})>()
);




