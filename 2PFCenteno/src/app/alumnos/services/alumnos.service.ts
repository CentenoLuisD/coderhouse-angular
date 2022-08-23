import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnosObservable: Observable<any>;
  
  alumnos: any[] = [
    {name: 'Luis1', lastname: 'Centeno1', email: 'Luis1@mail.com', dni: 96016641, courses: []},
    {name: 'Luis2', lastname: 'Centeno2', email: 'Luis2@mail.com', dni: 96016642, courses: []},
    {name: 'Luis3', lastname: 'Centeno3', email: 'Luis3@mail.com', dni: 96016643, courses: []},
    {name: 'Luis4', lastname: 'Centeno4', email: 'Luis4@mail.com', dni: 96016644, courses: []},
    {name: 'Luis5', lastname: 'Centeno5', email: 'Luis5@mail.com', dni: 96016645, courses: []},
    {name: 'Luis6', lastname: 'Centeno6', email: 'Luis6@mail.com', dni: 96016646, courses: []}
  ];

  constructor() { 
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

}
