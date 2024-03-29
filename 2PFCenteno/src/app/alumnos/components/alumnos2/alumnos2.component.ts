import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionState } from 'src/app/auth/state/sesion.reducer';
import { selectUsuarioAdminState } from 'src/app/auth/state/sesion.selectors';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { loadAlumnos } from '../../state/alumnos.actions';
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
  isAdmin$?: Observable<boolean | undefined>;
  columnas!: string[];
  loading$!: Observable<boolean>;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private dialog: MatDialog, 
    private alumnosService: AlumnosService, 
    private store: Store<AlumnosState>,
    private store2: Store<SesionState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadAlumnos());
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
    
    this.alumnos$.subscribe((alumnos: Alumno[]) => {
      this.dataSource.data = alumnos;
    });
  }

  eliminar(id: string){
    this.alumnosService.eliminarAlumno(id).subscribe((alumno: Alumno) => {
      this.store.dispatch(loadAlumnos());
      alert(`${alumno.id} - ${alumno.name} eliminado satisfactoriamente`);
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
      }
    })
  }

  //Search input handler
  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}
