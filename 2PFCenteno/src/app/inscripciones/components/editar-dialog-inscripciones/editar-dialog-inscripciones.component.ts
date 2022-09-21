import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionesService } from '../../services/inscripciones.service';
import { loadInscripciones } from '../../state/inscripciones.actions';
import { InscripcionesState } from '../../state/inscripciones.reducer';

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
    private store: Store<InscripcionesState>,
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
    const i: Inscripcion = {
      id: this.inscripcion.id,
      cursoid: this.formulario.value.cursoid,
      alumnoid: this.formulario.value.alumnoid
    }
    this.inscripcionesService.modificarInscripcion(i).subscribe((inscripcion: Inscripcion) => {
      this.store.dispatch(loadInscripciones());
      this.dialogRef.close(inscripcion);
    });
  }

  cerrar(){
    this.dialogRef.close();
  }

}
