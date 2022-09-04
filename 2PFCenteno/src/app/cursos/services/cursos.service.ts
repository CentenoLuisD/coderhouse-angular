import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from 'src/app/models/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private api: string = environment.api;

  // cursosObservable: Observable<any>;
  
  // cursos: any[] = [
  //   {id: 1, name: 'Curso 1', alumnos: []},
  //   {id: 2, name: 'Curso 2', alumnos: []},
  //   {id: 3, name: 'Curso 3', alumnos: []},
  //   {id: 4, name: 'Curso 4', alumnos: []},
  //   {id: 5, name: 'Curso 5', alumnos: []},
  //   {id: 6, name: 'Curso 6', alumnos: []}  
  // ];

  constructor(
    private http: HttpClient
  ) { 
    // this.cursosObservable = new Observable<any>((subscriptor) => {
    //   subscriptor.next(this.cursos);
    // });
  }

  // obtenerObservableCursos(){
  //   return this.cursosObservable;
  // }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }
  
  nuevoCurso(curso: Curso){
    return this.http.post<Curso>(`${this.api}/cursos`, curso);
  }

  modificarCurso(curso: Curso){
    return this.http.put<Curso>(`${this.api}/cursos/${curso.id}`, curso);
  }

  eliminarCurso(id: string){
    return this.http.delete<Curso>(`${this.api}/cursos/${id}`);
  }
}
