import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../services/cursos.service';

import { concatMap, map, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY} from 'rxjs';
import * as CursosActions from './cursos.actions';

@Injectable()
export class CursosEffects {


  loadCursos$ = createEffect(() => this.actions$.pipe(
    ofType(CursosActions.loadCursos),
    mergeMap(() => this.cursosService.obtenerCursos().pipe(
      map((c: Curso[]) => (CursosActions.cursosLoaded({cursos: c})))
    ))
  ));

  constructor(
    private actions$: Actions,
    private cursosService: CursosService
  ) {}
}
