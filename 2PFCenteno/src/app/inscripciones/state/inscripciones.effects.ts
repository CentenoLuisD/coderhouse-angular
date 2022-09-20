import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap } from 'rxjs/operators';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionesService } from '../services/inscripciones.service';
import * as InscripcionesActions from './inscripciones.actions';

@Injectable()
export class InscripcionesEffects {


  loadInscripciones$ = createEffect(() => this.actions$.pipe(
    ofType(InscripcionesActions.loadInscripciones),
    mergeMap(() => this.inscripcionesService.obtenerInscripciones().pipe(
      map((i: Inscripcion[]) => (InscripcionesActions.inscripcionesLoaded({inscripciones: i})))
    ))
  ));

  constructor(
    private actions$: Actions,
    private inscripcionesService: InscripcionesService
    ) {}
}
