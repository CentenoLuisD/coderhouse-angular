import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InscripcionesService } from '../../services/inscripciones.service';
import { CreateDialogInscripcionesComponent } from '../create-dialog-inscripciones/create-dialog-inscripciones.component';
import { EditarDialogInscripcionesComponent } from '../editar-dialog-inscripciones/editar-dialog-inscripciones.component';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  inscripciones: any = [];
  columnas: string[] = ['id', 'cursoid', 'alumnoid', 'actions'];
  
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatTable) tabla!: MatTable<any>;
  
  constructor(private dialog: MatDialog, private inscripcionesService: InscripcionesService) { 
    this.inscripcionesService.obtenerObservableInscripciones().subscribe((inscripciones) => {
      this.inscripciones = inscripciones;
    });

    this.dataSource.data = this.inscripciones;

    
  }

  ngOnInit(): void {
  }

  eliminar(elemento: any){
    this.dataSource.data = this.dataSource.data.filter((inscripciones: any) => inscripciones.id != elemento.id);
  }

  //Opens the Modal to edit the Student
  editar(elemento: any){
    const dialogRef = this.dialog.open(EditarDialogInscripcionesComponent, {
      width: '800px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(inscripciones => inscripciones.id === resultado.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  crear() {
    const dialogRef = this.dialog.open(CreateDialogInscripcionesComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        console.log('Resultado desde el modal de crear', resultado);
        this.dataSource.data.push(resultado);
        this.tabla.renderRows();
      }
    })
  }

  //Search input handler
  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}
