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
  
  constructor(
    private http: HttpClient
  ) {}

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
