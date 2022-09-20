import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AlumnosService } from '../../services/alumnos.service';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: any = [];
  columnas: string[] = ['name', 'email', 'dni', 'courses', 'actions'];
  
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatTable) tabla!: MatTable<any>;
  
  constructor(private dialog: MatDialog, private alumnosService: AlumnosService) { 
    // this.alumnosService.obtenerObservableAlumnos().subscribe((alumnos) => {
    //   this.alumnos = alumnos;
    // });

    // this.dataSource.data = this.alumnos;

    
  }

  ngOnInit(): void {
  }

  eliminar(elemento: any){
    console.log('Elemento a eliminar', elemento);
    console.log('dataSource ',this.dataSource);
    this.dataSource.data = this.dataSource.data.filter((alumno: any) => alumno.dni != elemento.dni);
  }

  //Opens the Modal to edit the Student
  editar(elemento: any){
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '800px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(Student => Student.dni === resultado.dni);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  crear() {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
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
