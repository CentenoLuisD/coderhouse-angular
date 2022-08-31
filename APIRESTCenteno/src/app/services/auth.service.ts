import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
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

  iniciarSesion (usuario: Usuario) {
    this.http.get<Usuario[]>(`${this.api}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter((u: Usuario) => u.usuario === usuario.usuario && u.contrasena === usuario.contrasena)[0];
      })
    ).pipe(
      catchError(this.manejarError)
    ).subscribe((usuario: Usuario) => {
      if(usuario){
        const sesion: Sesion = {
          sesionActiva: true,
          usuario: {
            id: usuario.id,
            usuario: usuario.usuario,
            contrasena: usuario.contrasena,
            admin: usuario.admin
          }
        }
    
        this.sesionSubject.next(sesion);

        this.router.navigate(['inicio']);
      }else{
        alert('Usario no encontrado');
      }
    });
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
