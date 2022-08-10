import { STUDENTS_DATA } from './student.data';
import { Student } from './student.types';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  columnas: string[] = ['name', 'email', 'dni', 'courses', 'actions'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource(STUDENTS_DATA);
  @ViewChild(MatTable) tabla!: MatTable<Student>;
  
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  //Delete the Student from the Table
  eliminar(elemento: Student){
    this.dataSource.data = this.dataSource.data.filter((Student: Student) => Student.dni != elemento.dni);
  }

  //Opens the Modal to edit the Student
  editar(elemento: Student){
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
