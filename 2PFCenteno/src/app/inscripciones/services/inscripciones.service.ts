import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  inscripcionesObservable: Observable<any>;
  
  inscripciones: any[] = [
    {id: '1', cursoid: 'curso 1', alumnoid: 'alunmo 1' },
    {id: '2', cursoid: 'curso 2', alumnoid: 'alunmo 2' },
    {id: '3', cursoid: 'curso 3', alumnoid: 'alunmo 3' },
    {id: '4', cursoid: 'curso 4', alumnoid: 'alunmo 4' },
    {id: '5', cursoid: 'curso 5', alumnoid: 'alunmo 5' },
    {id: '6', cursoid: 'curso 6', alumnoid: 'alunmo 6' }
  ];

  constructor() { 
    this.inscripcionesObservable = new Observable<any>((subscriptor) => {
      subscriptor.next(this.inscripciones);
    });

  }

  obtenerObservableInscripciones(){
    return this.inscripcionesObservable;
  }

}
