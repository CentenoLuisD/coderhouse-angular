import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionesService } from '../../services/inscripciones.service';

@Component({
  selector: 'app-create-dialog-inscripciones',
  templateUrl: './create-dialog-inscripciones.component.html',
  styleUrls: ['./create-dialog-inscripciones.component.css']
})
export class CreateDialogInscripcionesComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateDialogInscripcionesComponent>,
    private inscripcionesService: InscripcionesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = fb.group({
      cursoid: new FormControl('', [Validators.required]),
      alumnoid: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    //this.dialogRef.close(this.formulario.value);
    const c: Inscripcion = {
      id: '',
      cursoid: this.formulario.value.cursoid,
      alumnoid: this.formulario.value.alumnoid
    }

    this.inscripcionesService.nuevaInscripcion(c).subscribe( (inscripcion: Inscripcion) => {
      this.dialogRef.close(inscripcion);
    });
  }

}
