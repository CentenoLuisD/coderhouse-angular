import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    private alumnosService: AlumnosService,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumno
  ) {
    this.formulario = fb.group({
      name: new FormControl(alumno.name),
      dni: new FormControl(alumno.dni),
      email: new FormControl(alumno.email)
    })
  }

  ngOnInit(){
  }

  actualizar(){
    const c: Alumno = {
      id: this.alumno.id,
      name: this.formulario.value.name,
      email: this.formulario.value.email,
      dni: this.formulario.value.dni
    }
    this.alumnosService.modificarAlumno(c).subscribe((alumno: Alumno) => {
      this.dialogRef.close(alumno);
    });
  }

  cerrar(){
    this.dialogRef.close();
  }

}
