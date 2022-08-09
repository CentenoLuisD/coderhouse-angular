import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../students/student.types';

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
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    this.formulario = fb.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
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
    this.dialogRef.close(this.formulario.value);
  }

}
