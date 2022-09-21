import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CursosService } from '../../services/cursos.service';
import { Curso } from 'src/app/models/curso';
import { CreateDialogCursosComponent } from '../create-dialog-cursos/create-dialog-cursos.component';
import { EditarDialogCursosComponent } from '../editar-dialog-cursos/editar-dialog-cursos.component';
import { Store } from '@ngrx/store';
import { SesionState } from 'src/app/auth/state/sesion.reducer';
import { CursosState } from '../../state/cursos.reducer';
import { loadCursos } from '../../state/cursos.actions';
import { selectLoadedState, selectLoadingState } from '../../state/cursos.selectors';
import { selectUsuarioAdminState } from 'src/app/auth/state/sesion.selectors';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  isAdmin$?: Observable<boolean | undefined>;
  columnas!: string[];
  loading$!: Observable<boolean>;
  
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  
  constructor(
    private dialog: MatDialog, 
    private cursosService: CursosService,
    private store: Store<CursosState>,
    private store2: Store<SesionState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadCursos());
    this.cursos$ = this.store.select(selectLoadedState);
    this.loading$ = this.store.select(selectLoadingState);
    this.isAdmin$ = this.store2.select(selectUsuarioAdminState);

    this.isAdmin$.subscribe((admin: boolean | undefined) => {
      if (admin) {
        this.columnas = ['id', 'name', 'profesor', 'actions'];
      } else {
        this.columnas = ['id', 'name', 'profesor'];
      }
    })
    
    this.cursos$.subscribe((cursos: Curso[]) => {
      this.dataSource.data = cursos;
    });
    
  }

  eliminar(id: string){
    this.cursosService.eliminarCurso(id).subscribe((curso: Curso) => {
      this.store.dispatch(loadCursos());
      alert(`ID: ${curso.id} - ${curso.name} eliminado satisfactoriamente`);
    });
  }

  //Abre el Modal para editar el Curso
  editar(curso: Curso){
    const dialogRef = this.dialog.open(EditarDialogCursosComponent, {
      width: '600px',
      data: curso
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        alert(`ID: ${curso.id}-${curso.name} fue editado satisfactoriamente`);
      }
    })
  }

  crear() {
    const dialogRef = this.dialog.open(CreateDialogCursosComponent, {
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
