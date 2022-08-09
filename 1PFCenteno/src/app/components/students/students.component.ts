import { STUDENTS_DATA } from './student.data';
import { Student } from './student.types';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  columnas: string[] = ['name', 'lastname', 'email', 'dni', 'courses', 'actions'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource(STUDENTS_DATA);
  @ViewChild(MatTable) tabla!: MatTable<Student>;
  
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: Student){
    this.dataSource.data = this.dataSource.data.filter((Student: Student) => Student.dni != elemento.dni);
  }

  editar(elemento: Student){
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '600px',
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

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}
