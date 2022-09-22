import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) {}

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.api}/usuarios`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }

  nuevoUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.api}/usuarios`, usuario);
  }

  modificarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.api}/usuarios/${usuario.id}`, usuario);
  }

  eliminarUsuario(id: string): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.api}/usuarios/${id}`);
  }

}
