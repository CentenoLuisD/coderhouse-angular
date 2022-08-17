import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { MyserviceService } from './services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  profesores: any = [];
  alumnos: any = [];
  profesores$: Observable<any>;
  profesoresSuscripcion: Subscription;
  alumnosSuscripcion: Subscription;

  constructor (private myService: MyserviceService) {
    
    this.myService.obtenerProfesores().then((profesores) => {
      this.profesores = profesores;
    }).catch((error) => {
      console.log(error);
    });
  
    this.profesoresSuscripcion = this.myService.obtenerObservableProfesores().subscribe((profesores) => {
      this.profesores = profesores;
    })

    this.alumnosSuscripcion = this.myService.obtenerObservableAlumnos().subscribe((alumnos) => {
      this.alumnos = alumnos;
    })

    this.profesores$ = this.myService.obtenerObservableProfesores();

  }

  ngOnInit(): void {
    this.myService.obtenerObservableAlumnos().pipe(
      map((alumnos: any[]) => alumnos.filter(alumno => alumno.curso === 'Angular'))
    ).subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }

  ngOnDestroy(): void {
    this.profesoresSuscripcion.unsubscribe();
    this.alumnosSuscripcion.unsubscribe();
  }

}
