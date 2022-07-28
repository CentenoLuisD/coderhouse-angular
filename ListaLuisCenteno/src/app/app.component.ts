import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudiantes = [
    {
      nombre: 'Estudiante 1',
      apellido: 'Estudiante 11',
      flagIcon: true,
      flagClass: false
    },{
      nombre: 'Estudiante 2',
      apellido: 'Estudiante 22',
      flagIcon: false,
      flagClass: true
    },{
      nombre: 'Estudiante 3',
      apellido: 'Estudiante 33',
      flagIcon: true,
      flagClass: false
    },
    {
      nombre: 'Estudiante 4',
      apellido: 'Estudiante 44',
      flagIcon: true,
      flagClass: true
    },
    {
      nombre: 'Estudiante 5',
      apellido: 'Estudiante 55',
      flagIcon: true,
      flagClass: false
    },
    {
      nombre: 'Estudiante 6',
      apellido: 'Estudiante 66',
      flagIcon: true,
      flagClass: true
    }
  ];
}
