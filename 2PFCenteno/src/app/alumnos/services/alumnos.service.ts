import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from 'src/app/models/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) {}

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.api}/alumnos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }
  
  nuevoAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(`${this.api}/alumnos`, alumno);
  }

  modificarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(`${this.api}/alumnos/${alumno.id}`, alumno);
  }

  eliminarAlumno(id: string): Observable<Alumno>{
    return this.http.delete<Alumno>(`${this.api}/alumnos/${id}`);
  }

}
