import { Injectable } from '@angular/core';
import { ResolveEnd } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  profesores: any[] = [
    {id: 1, nombre: 'Luis', curso: 'Angular'}
  ];

  profesoresObservable: Observable<any>;
  cursos: any[] = [];
  cursosSubject: Subject<any>;

  constructor() {
    
    this.cursosSubject = new Subject();
    
    // Para enviar Datos del Servicio al Componente usando Observable
    this.profesoresObservable = new Observable<any>((subscriptor) => {
      subscriptor.next(this.profesores);
      
      setTimeout(() => {
        this.profesores.push({
          id: 2, nombre: 'Olga', curso: 'Angular'
        });
        // Para enviar Datos del Servicio al Componente usando Observable
        subscriptor.next(this.profesores);
      }, 3000)
    });
   }

  // Para enviar los Datos del Servico al Componente usando Promises
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

  //Para enviar Data del Servico al Componente de forma Reactiva usando Observable
  obtenerObservableProfesores () {
    return this.profesoresObservable;
  }

  // Para recibir Data del Componente en el Observable del Servicio (generando automaticamente un nuevo Evento sin usar .next(),
  // ya que no esta disponible en los Observables mas si esta disponible en los Subject)
  agregarNuevoProfesor(profesor: any) {
    this.profesores.push(profesor);
    console.log('Desde la recepcion del Observable, en el servicio: ', this.profesores)
  }

  // Para enviar los Datos desde el Servicio hacia el Componente de forma Reactiva usando Subject
  obtenerObservableCursos () {
    return this.cursosSubject.asObservable();
  }

  // Para recibir los Datos desde el Componente y generar el nuevo Evento en el Subject
  agregarNuevoCurso(curso: any) {
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
    console.log('Agregando curso al Subjet cursos', this.cursosSubject);
  }
}
