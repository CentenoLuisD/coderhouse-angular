import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { SesionState } from '../auth/state/sesion.reducer';
import { selectSesionActivaState } from '../auth/state/sesion.selectors';
import { Sesion } from '../models/sesion';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private auth: AuthService,
    private store: Store<SesionState>,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select(selectSesionActivaState).pipe(
        map((sesionActiva: boolean) => {
          if(sesionActiva){
            return true;
          } else {
            this.router.navigate(['auth/login']);
            return false;
          }
        })
      );
  }
  
}
