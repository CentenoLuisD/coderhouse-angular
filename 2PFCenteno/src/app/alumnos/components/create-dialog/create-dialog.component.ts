import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateDialogComponent>,
    private alumnosService: AlumnosService,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumno
  ) {
    this.formulario = fb.group({
      name: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    // this.dialogRef.close(this.formulario.value);

    const c: Alumno = {
      id: '',
      name: this.formulario.value.name,
      email: this.formulario.value.email,
      dni: this.formulario.value.dni
    }

    this.alumnosService.nuevoAlumno(c).subscribe((alumno: Alumno) => {
      this.dialogRef.close(alumno);
    });

  }

}

