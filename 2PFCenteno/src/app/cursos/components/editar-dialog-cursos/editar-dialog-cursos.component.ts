import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = fb.group({
      id: new FormControl(data.id),
      name: new FormControl(data.name)
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
