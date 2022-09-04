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

  alumnosObservable: Observable<any>;
  
  alumnos: any[] = [
    {name: 'Luis1', lastname: 'Centeno1', email: 'Luis1@mail.com', dni: 96016641, courses: []},
    {name: 'Luis2', lastname: 'Centeno2', email: 'Luis2@mail.com', dni: 96016642, courses: []},
    {name: 'Luis3', lastname: 'Centeno3', email: 'Luis3@mail.com', dni: 96016643, courses: []},
    {name: 'Luis4', lastname: 'Centeno4', email: 'Luis4@mail.com', dni: 96016644, courses: []},
    {name: 'Luis5', lastname: 'Centeno5', email: 'Luis5@mail.com', dni: 96016645, courses: []},
    {name: 'Luis6', lastname: 'Centeno6', email: 'Luis6@mail.com', dni: 96016646, courses: []}
  ];

  constructor(
    private http: HttpClient
  ) { 
    this.alumnosObservable = new Observable<any>((subscriptor) => {
      subscriptor.next(this.alumnos);
    });
  }

  obtenerObservableAlumnos(){
    return this.alumnosObservable;
  }

  agregarNuevoAlumno(alumno: any){
    this.alumnos.push(alumno);
    console.log(this.alumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.api}/alumnos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }
  
  nuevoAlumno(alumno: Alumno){
    return this.http.post<Alumno>(`${this.api}/alumnos`, alumno);
  }

  modificarAlumno(alumno: Alumno){
    return this.http.put<Alumno>(`${this.api}/alumnos/${alumno.id}`, alumno);
  }

  eliminarAlumno(id: string){
    return this.http.delete<Alumno>(`${this.api}/alumnos/${id}`);
  }

}
