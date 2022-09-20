import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InscripcionesService } from '../../services/inscripciones.service';
import { CreateDialogInscripcionesComponent } from '../create-dialog-inscripciones/create-dialog-inscripciones.component';
import { EditarDialogInscripcionesComponent } from '../editar-dialog-inscripciones/editar-dialog-inscripciones.component';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Inscripcion } from 'src/app/models/inscripcion';
import { Sesion } from 'src/app/models/sesion';
import { Store } from '@ngrx/store';
import { InscripcionesState } from '../../state/inscripciones.reducer';
import { SesionState } from 'src/app/auth/state/sesion.reducer';
import { loadInscripciones } from '../../state/inscripciones.actions';
import { selectLoadedState, selectLoadingState } from '../../state/inscripciones.selectors';
import { selectUsuarioAdminState } from 'src/app/auth/state/sesion.selectors';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  inscripciones$!: Observable<Inscripcion[]>;
  // inscripciones!: Inscripcion[];
  isAdmin$?: Observable<boolean | undefined>;
  columnas!: string[];
  loading$!: Observable<boolean>;
  
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  // @ViewChild(MatTable) tabla!: MatTable<any>;
  
  constructor(
      private dialog: MatDialog, 
      private inscripcionesService: InscripcionesService,
      private store: Store<InscripcionesState>,
      private store2: Store<SesionState>
    ) {
      // this.authService.obtenerSesion().subscribe((sesion: Sesion) => {
      //   this.isAdmin = sesion.usuario?.admin;
      // }) 
    // this.inscripcionesService.obtenerObservableInscripciones().subscribe((inscripciones) => {
    //   this.inscripciones = inscripciones;
    // });

    // this.dataSource.data = this.inscripciones;
  }

  ngOnInit(): void {
    this.store.dispatch(loadInscripciones());
    this.inscripciones$ = this.store.select(selectLoadedState);
    this.loading$ = this.store.select(selectLoadingState);
    this.isAdmin$ = this.store2.select(selectUsuarioAdminState);

    this.isAdmin$.subscribe((admin: boolean | undefined) => {
      if (admin) {
        this.columnas = ['id', 'cursoid', 'alumnoid', 'actions'];
      } else {
        this.columnas = ['id', 'cursoid', 'alumnoid'];
      }
    })
    
    // this.inscripciones$ = this.inscripcionesService.obtenerInscripciones();
    
    this.inscripciones$.subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource.data = inscripciones;
    });
  }

  // eliminar(elemento: any){
  //   this.dataSource.data = this.dataSource.data.filter((inscripciones: any) => inscripciones.id != elemento.id);
  // }

  eliminar(id: string){
    // this.dataSource.data = this.dataSource.data.filter((curso: any) => curso.id != elemento.id);
    this.inscripcionesService.eliminarInscripcion(id).subscribe((inscripcion: Inscripcion) => {
      this.store.dispatch(loadInscripciones());
      alert(`ID: ${inscripcion.id} eliminado satisfactoriamente`);
      // this.ngOnInit();
    });
  }

  //Opens the Modal to edit the Student
  editar(inscripcion: Inscripcion){
    const dialogRef = this.dialog.open(EditarDialogInscripcionesComponent, {
      width: '600px',
      data: inscripcion
    });

    // dialogRef.afterClosed().subscribe(resultado => {
    //   if(resultado){
    //     const item = this.dataSource.data.find(inscripciones => inscripciones.id === resultado.id);
    //     const index = this.dataSource.data.indexOf(item!);
    //     this.dataSource.data[index] = resultado;
    //     this.tabla.renderRows();
    //   }
    // })

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        alert(`ID: ${inscripcion.id}  fue editado satisfactoriamente`);
        // this.ngOnInit();
      }
    })

  }

  crear() {
    const dialogRef = this.dialog.open(CreateDialogInscripcionesComponent, {
      width: '600px',
    });

    // dialogRef.afterClosed().subscribe(resultado => {
    //   if(resultado){
    //     console.log('Resultado desde el modal de crear', resultado);
    //     this.dataSource.data.push(resultado);
    //     this.tabla.renderRows();
    //   }
    // })

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        alert(`ID: ${resultado.id} fue creado satisfactoriamente`);
        // this.ngOnInit();
        // console.log('Resultado desde el modal de crear', resultado);
        // this.dataSource.data.push(resultado);
        // this.tabla.renderRows();
      }
    })

  }

  //Search input handler
  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}
