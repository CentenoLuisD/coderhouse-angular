import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as UsuariosActions from './usuarios.actions';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';

@Injectable()
export class UsuariosEffects {

  loadUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(UsuariosActions.loadUsuarios),
    mergeMap(() => this.usuariosService.obtenerUsuarios().pipe(
      map((u: Usuario[]) => (UsuariosActions.usuariosLoaded({usuarios: u})))
    ))
  ));

  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}
}
