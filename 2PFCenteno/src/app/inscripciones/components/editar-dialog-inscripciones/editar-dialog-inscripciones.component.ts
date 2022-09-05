import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionesService } from '../../services/inscripciones.service';

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
    private inscripcionesService: InscripcionesService,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion
  ) {
    this.formulario = fb.group({
      cursoid: new FormControl(inscripcion.cursoid),
      alumnoid: new FormControl(inscripcion.alumnoid)
    })
  }

  ngOnInit(){
  }

  actualizar(){
    //this.dialogRef.close(this.formulario.value);
    const c: Inscripcion = {
      id: this.inscripcion.id,
      cursoid: this.formulario.value.cursoid,
      alumnoid: this.formulario.value.alumnoid
    }
    this.inscripcionesService.modificarInscripcion(c).subscribe((inscripcion: Inscripcion) => {
      this.dialogRef.close(inscripcion);
    });
  }

  cerrar(){
    this.dialogRef.close();
  }

}
