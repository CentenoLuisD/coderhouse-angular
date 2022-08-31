import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private api: string = environment.api
  
  constructor(
    private http: HttpClient
  ) { }

  nuevoCurso (curso: Curso) {
    return this.http.post<Curso>(`${this.api}/cursos`, curso);
  }
  
  obtenerCursos (): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.api}/cursos`);

  }

  obtenerCurso (id: string): Observable<Curso> {
    return this.http.get<Curso>(`${this.api}/cursos/${id}`);

  }

  modificarCurso (curso: Curso) {
    return this.http.put<Curso>(`${this.api}/cursos/${curso.id}`, curso);
  }

  eliminarCurso (id: string) {
    return this.http.delete<Curso>(`${this.api}/cursos/${id}`);
  }

}
