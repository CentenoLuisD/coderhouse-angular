import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionState } from 'src/app/auth/state/sesion.reducer';
import { selectSesionActivaState, selectUsuarioActivoState, selectUsuarioAdminState } from 'src/app/auth/state/sesion.selectors';
import { Alumno } from 'src/app/models/alumno';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { AlumnosService } from '../../services/alumnos.service';
import { alumnosLoaded, loadAlumnos } from '../../state/alumnos.actions';
import { AlumnosState } from '../../state/alumnos.reducer';
import { selectLoadedState, selectLoadingState } from '../../state/alumnos.selectors';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

@Component({
  selector: 'app-alumnos2',
  templateUrl: './alumnos2.component.html',
  styleUrls: ['./alumnos2.component.css']
})
export class Alumnos2Component implements OnInit {
  alumnos$!: Observable<Alumno[]>;
  alumnos!: Alumno[];
  isAdmin$?: Observable<boolean | undefined>;
  columnas!: string[];
  loading$!: Observable<boolean>;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private dialog: MatDialog, 
    private alumnosService: AlumnosService, 
    private authService: AuthService,
    private store: Store<AlumnosState>,
    private store2: Store<SesionState>
  ) { 
    // this.alumnosService.obtenerAlumnos().subscribe((alumnos: Alumno[]) => {
    //   this.dataSource.data = alumnos;
    //   console.log('CONSTRUCTOR DE ALUMNOS 2', this.dataSource.data )
    // });
    // this.authService.obtenerSesion().subscribe((sesion: Sesion) => {
    //   this.isAdmin = sesion.usuario?.admin;
    // })

  }

  ngOnInit(): void {
    this.store.dispatch(loadAlumnos());
    // this.alumnosService.obtenerAlumnos().subscribe((alumnos: Alumno[]) => {
    //      this.store.dispatch(alumnosLoaded({
    //       alumnos: alumnos
    //      }))
    // });
    this.loading$ = this.store.select(selectLoadingState);

    this.alumnos$ = this.store.select(selectLoadedState);

    this.isAdmin$ = this.store2.select(selectUsuarioAdminState);
    
    this.isAdmin$.subscribe(admin => {
      if(admin){
        this.columnas = ['id', 'name', 'email', 'dni', 'actions'];
      }  else {
        this.columnas = ['id', 'name', 'email', 'dni'];
      }
    }) 
    
      
   
    
    // this.alumnos$ = this.alumnosService.obtenerAlumnos();
    
    this.alumnos$.subscribe((alumnos: Alumno[]) => {
      console.log('NG ON INIT DE ALUMNOS 2, alumnos$ suscriber', alumnos)
      this.dataSource.data = alumnos;
    });

    console.log('NG ON INIT DE ALUMNOS 2, dataSource.data', this.dataSource.data)
  
  }

  eliminar(id: string){
    this.alumnosService.eliminarAlumno(id).subscribe((alumno: Alumno) => {
      alert(`${alumno.id} - ${alumno.name} eliminado satisfactoriamente`);
      this.ngOnInit();
    });
  }

  //Opens the Modal to edit the Student
  editar(elemento: Alumno){
  
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '600px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if(resultado){
        alert(`ID: ${elemento.id}-${elemento.name} fue editado satisfactoriamente`);
        this.ngOnInit();
      }
    })
  }

  crear() {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        alert(`ID: ${resultado.id} - ${resultado.name} fue creado satisfactoriamente`);
        console.log('Resultado desde el modal de crear ALUMNO', resultado);
        this.ngOnInit();
      }
    })
  }

  //Search input handler
  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}
