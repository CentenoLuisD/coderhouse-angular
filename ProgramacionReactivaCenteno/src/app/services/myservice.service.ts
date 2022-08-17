import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  profesores: any[] = [
    {id: 1, nombre: 'Luis1', curso: 'Angular1', active: true},
    {id: 2, nombre: 'Luis2', curso: 'Angular2', active: false},
    {id: 3, nombre: 'Luis3', curso: 'Angular3', active: true},
    {id: 4, nombre: 'Luis4', curso: 'Angular4', active: false},
    {id: 5, nombre: 'Luis5', curso: 'Angular5', active: true},
    {id: 6, nombre: 'Luis6', curso: 'Angular6', active: false},
  ];

  alumnos: any[] = [
    {id: 1, nombre: 'Roman', curso: 'Angular'},
    {id: 2, nombre: 'Abner', curso: 'Angular'},
    {id: 3, nombre: 'Jorge', curso: 'React'},
    {id: 4, nombre: 'Fran', curso: 'Vue'},
    {id: 5, nombre: 'Lautaro', curso: 'CSS'}
  ];

  profesoresObservable: Observable<any>;

  constructor() {
    
    this.profesoresObservable = new Observable<any>((subscriptor) => {
      subscriptor.next(this.profesores);
    });
  }

  obtenerProfesores () {
    return new Promise((resolve, reject) => {
      if(this.profesores.length > 0) {
        resolve(this.profesores);
      } else {
        reject({
          'codigo': 0,
          'mensaje': 'No hay profesores'
        });
      }
    });
  }

  obtenerObservableProfesores () {
    return this.profesoresObservable;
  }

  obtenerObservableAlumnos(){
    return of(this.alumnos);
  }

}
