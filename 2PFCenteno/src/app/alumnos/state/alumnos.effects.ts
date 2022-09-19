import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as AlumnosActions from './alumnos.actions';
import { AlumnosService } from '../services/alumnos.service';
import { Alumno } from 'src/app/models/alumno';

@Injectable()
export class AlumnosEffects {


  loadAlumnos$ = createEffect(() => this.actions$.pipe(
      ofType(AlumnosActions.loadAlumnos),
      mergeMap(() => this.alumnosService.obtenerAlumnos().pipe(
        map((a: Alumno[]) => (AlumnosActions.alumnosLoaded({alumnos: a})))
      ))
    ));
  

  constructor(
    private actions$: Actions,
    private alumnosService: AlumnosService
    ) {}
}
