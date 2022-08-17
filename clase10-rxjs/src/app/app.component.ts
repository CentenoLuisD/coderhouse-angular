import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  profesores: any = [];
  cursos: any = [];
  cursosSuscripcion: Subscription;
  profesoresSuscripcion: Subscription;

  constructor (private rxjsService: RxjsService) {
    
    // Para recibir los datos que envia la Promesa desde el Servicio
    this.rxjsService.obtenerProfesores().then((profesores) => {
      console.log('Estoy desde el Promise',profesores);
      this.profesores = profesores;
    }).catch((error) => {
      console.log('Estoy desde el Promise',error);
    });

    // Para recibir los datos que envia el Observable desde el Servicio
    this.profesoresSuscripcion = this.rxjsService.obtenerObservableProfesores().subscribe((profesores) => {
      console.log('Estoy desde el Observable', profesores)
    })

    // Para recibir los datos que envia el Subject desde el Servicio
    this.cursosSuscripcion = this.rxjsService.obtenerObservableCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  ngOnDestroy ():void {
    this.cursosSuscripcion.unsubscribe();
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
