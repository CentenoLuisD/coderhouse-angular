import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sesion } from '../models/sesion';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private sesionSubject!: BehaviorSubject<Sesion>
  private api: string = environment.api;
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    const sesion: Sesion = {
      sesionActiva: false
    }
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  iniciarSesion (usuario: Usuario): Observable<Usuario> {
    return this.http.get<Usuario[]>(`${this.api}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter((u: Usuario) => (u.usuario === usuario.usuario && u.contrasena === usuario.contrasena))[0];
      })
    )
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servicor', error.status, error.message)
      alert('Hubo un error de comunnicacion, intente de nuevo')
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

  cerrarSesion () {
    const sesion: Sesion = {
      sesionActiva: false
    }
    this.sesionSubject.next(sesion);
  }

  obtenerSesion () {
    return this.sesionSubject.asObservable();
  }
  
}
