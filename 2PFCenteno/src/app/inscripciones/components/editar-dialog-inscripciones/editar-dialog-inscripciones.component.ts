import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-dialog-inscripciones',
  templateUrl: './editar-dialog-inscripciones.component.html',
  styleUrls: ['./editar-dialog-inscripciones.component.css']
})
export class EditarDialogInscripcionesComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogInscripcionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = fb.group({
      id: new FormControl(data.id),
      cursoid: new FormControl(data.cursoid),
      alumnoid: new FormControl(data.alumnoid)
    })
  }

  ngOnInit(){
  }

  actualizar(){
    this.dialogRef.close(this.formulario.value);
  }

  cerrar(){
    this.dialogRef.close();
  }

}
