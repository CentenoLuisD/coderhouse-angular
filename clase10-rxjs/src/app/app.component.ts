import { Component } from '@angular/core';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profesores: any = [];
  cursos: any = [];

  constructor (private rxjsService: RxjsService) {
    
    // Para recibir los datos que envia la Promesa desde el Servicio
    this.rxjsService.obtenerProfesores().then((profesores) => {
      console.log('Estoy desde el Promise',profesores);
      this.profesores = profesores;
    }).catch((error) => {
      console.log('Estoy desde el Promise',error);
    });

    // Para recibir los datos que envia el Observable desde el Servicio
    this.rxjsService.obtenerObservableProfesores().subscribe((profesores) => {
      console.log('Estoy desde el Observable', profesores)
    })

    // Para recibir los datos que envia el Subject desde el Servicio
    this.rxjsService.obtenerObservableCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  // Para enviar Datos del Componente al Observable
  agregarNuevoProfesor () {
    let profesor = {id: 1, nombre: 'Luis', curso: 'Angular'};
    this.rxjsService.agregarNuevoProfesor(profesor);
  }
  
  // Para enviar Datos del Componente al Subject
  agregarNuevoCurso () {
    let curso = {id: 1, nombre: 'UI/UX', comision: '32450'};
    this.rxjsService.agregarNuevoCurso(curso);
  }
}
