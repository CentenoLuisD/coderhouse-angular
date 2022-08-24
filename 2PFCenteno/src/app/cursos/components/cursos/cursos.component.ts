import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CursosService } from '../../services/cursos.service';
import { CreateDialogCursosComponent } from '../create-dialog-cursos/create-dialog-cursos.component';
import { EditarDialogCursosComponent } from '../editar-dialog-cursos/editar-dialog-cursos.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any = [];
  columnas: string[] = ['id', 'name', 'alumnos', 'actions'];
  
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatTable) tabla!: MatTable<any>;
  
  constructor(private dialog: MatDialog, private cursosService: CursosService) { 
    this.cursosService.obtenerObservableCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });

    this.dataSource.data = this.cursos;

    
  }

  ngOnInit(): void {
  }

  eliminar(elemento: any){
    this.dataSource.data = this.dataSource.data.filter((curso: any) => curso.id != elemento.id);
  }

  //Opens the Modal to edit the Student
  editar(elemento: any){
    const dialogRef = this.dialog.open(EditarDialogCursosComponent, {
      width: '800px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(curso => curso.id === resultado.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  crear() {
    const dialogRef = this.dialog.open(CreateDialogCursosComponent, {
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
