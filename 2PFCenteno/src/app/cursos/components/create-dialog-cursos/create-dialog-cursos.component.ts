import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.dialogRef.close(this.formulario.value);
  }

}
