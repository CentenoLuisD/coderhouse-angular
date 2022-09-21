import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionesService } from '../../services/inscripciones.service';
import { loadInscripciones } from '../../state/inscripciones.actions';
import { InscripcionesState } from '../../state/inscripciones.reducer';

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
    private store: Store<InscripcionesState>,
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
    const i: Inscripcion = {
      id: '',
      cursoid: this.formulario.value.cursoid,
      alumnoid: this.formulario.value.alumnoid
    }

    this.inscripcionesService.nuevaInscripcion(i).subscribe( (inscripcion: Inscripcion) => {
      this.store.dispatch(loadInscripciones());
      this.dialogRef.close(inscripcion);
    });
  }

}
