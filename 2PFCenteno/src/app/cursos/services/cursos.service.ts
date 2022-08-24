import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursosObservable: Observable<any>;
  
  cursos: any[] = [
    {id: 1, name: 'Curso 1', alumnos: []},
    {id: 2, name: 'Curso 2', alumnos: []},
    {id: 3, name: 'Curso 3', alumnos: []},
    {id: 4, name: 'Curso 4', alumnos: []},
    {id: 5, name: 'Curso 5', alumnos: []},
    {id: 6, name: 'Curso 6', alumnos: []}  
  ];

  constructor() { 
    this.cursosObservable = new Observable<any>((subscriptor) => {
      subscriptor.next(this.cursos);
    });

  }

  obtenerObservableCursos(){
    return this.cursosObservable;
  }
}
