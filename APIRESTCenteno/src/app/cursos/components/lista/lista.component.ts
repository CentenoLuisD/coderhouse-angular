import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { DialogEditarComponent } from '../dialog-editar/dialog-editar.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  cursos$!: Observable<Curso[]>

  constructor(
    private cursoService: CursoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  eliminar(id: string) {
    this.cursoService.eliminarCurso(id).subscribe((curso: Curso) => {
      this.ngOnInit();
    })
  }

  abrirDialog(curso: Curso) {
    const dialogRef = this.dialog.open(DialogEditarComponent, {
      width: '300px',
      data: curso
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if(resultado){
        alert(`${curso.id}-${curso.nombre} fue editado satisfactoriamente`);
        this.ngOnInit();
      }
    })
  }

}
