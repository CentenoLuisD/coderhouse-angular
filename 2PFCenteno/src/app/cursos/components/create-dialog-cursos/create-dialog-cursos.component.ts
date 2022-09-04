import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-create-dialog-cursos',
  templateUrl: './create-dialog-cursos.component.html',
  styleUrls: ['./create-dialog-cursos.component.css']
})
export class CreateDialogCursosComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateDialogCursosComponent>,
    private cursosService: CursosService,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ) {
    this.formulario = fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      profesor: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
   }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    // this.dialogRef.close(this.formulario.value);
    const c: Curso = {
      id: '',
      name: this.formulario.value.name,
      profesor: this.formulario.value.profesor
    }

    this.cursosService.nuevoCurso(c).subscribe((curso: Curso) => {
      this.dialogRef.close(curso);
    });
  }

}
