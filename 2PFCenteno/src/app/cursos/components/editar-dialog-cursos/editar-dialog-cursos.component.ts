import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-editar-dialog-cursos',
  templateUrl: './editar-dialog-cursos.component.html',
  styleUrls: ['./editar-dialog-cursos.component.css']
})
export class EditarDialogCursosComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogCursosComponent>,
    private cursosService: CursosService,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ) {
    this.formulario = fb.group({
      name: new FormControl(curso.name),
      profesor: new FormControl(curso.profesor),
    })
  }

  ngOnInit(){
  }

  actualizar(){
    // this.dialogRef.close(this.formulario.value);
    const c: Curso = {
      id: this.curso.id,
      name: this.formulario.value.name,
      profesor: this.formulario.value.profesor
    }
    this.cursosService.modificarCurso(c).subscribe((curso: Curso) => {
      this.dialogRef.close(curso);
    });
  }

  cerrar(){
    this.dialogRef.close();
  }

}
