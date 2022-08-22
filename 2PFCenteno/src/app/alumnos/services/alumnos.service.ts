import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnos: any[] = [
    {id: 1, nombre: 'Roman', curso: 'Angular'},
    {id: 2, nombre: 'Abner', curso: 'Angular'},
    {id: 3, nombre: 'Jorge', curso: 'React'},
    {id: 4, nombre: 'Fran', curso: 'Vue'},
    {id: 5, nombre: 'Lautaro', curso: 'CSS'}
  ];

  constructor() { }
}
