import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inscripcion} from 'src/app/models/inscripcion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  private api: string = environment.api;
  // inscripcionesObservable: Observable<any>;
  
  // inscripciones: any[] = [
  //   {id: '1', cursoid: 'curso 1', alumnoid: 'alunmo 1' },
  //   {id: '2', cursoid: 'curso 2', alumnoid: 'alunmo 2' },
  //   {id: '3', cursoid: 'curso 3', alumnoid: 'alunmo 3' },
  //   {id: '4', cursoid: 'curso 4', alumnoid: 'alunmo 4' },
  //   {id: '5', cursoid: 'curso 5', alumnoid: 'alunmo 5' },
  //   {id: '6', cursoid: 'curso 6', alumnoid: 'alunmo 6' }
  // ];

  constructor(
    private http: HttpClient
  ) { 
    // this.inscripcionesObservable = new Observable<any>((subscriptor) => {
    //   subscriptor.next(this.inscripciones);
    // });
  }

  // obtenerObservableInscripciones(){
  //   return this.inscripcionesObservable;
  // }

  obtenerInscripciones(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${this.api}/inscripciones`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }
  
  nuevaInscripcion(inscripcion: Inscripcion){
    return this.http.post<Inscripcion>(`${this.api}/inscripciones`, inscripcion);
  }

  modificarInscripcion(inscripcion: Inscripcion){
    return this.http.put<Inscripcion>(`${this.api}/inscripciones/${inscripcion.id}`, inscripcion);
  }

  eliminarInscripcion(id: string){
    return this.http.delete<Inscripcion>(`${this.api}/inscripciones/${id}`);
  }

}
