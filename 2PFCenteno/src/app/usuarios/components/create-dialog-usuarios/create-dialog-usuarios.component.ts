import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { loadUsuarios } from '../../state/usuarios.actions';
import { UsuariosState } from '../../state/usuarios.reducer';

@Component({
  selector: 'app-create-dialog-usuarios',
  templateUrl: './create-dialog-usuarios.component.html',
  styleUrls: ['./create-dialog-usuarios.component.css']
})
export class CreateDialogUsuariosComponent implements OnInit {
  formulario!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateDialogUsuariosComponent>,
    private store: Store<UsuariosState>,
    private usuariosService: UsuariosService,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario
  ) {
    this.formulario = fb.group({
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
      admin: new FormControl(false, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    // this.dialogRef.close(this.formulario.value);

    const u: Usuario = {
      id: '',
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin
    }

    this.usuariosService.nuevoUsuario(u).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadUsuarios());
      this.dialogRef.close(usuario);
    });

  }

}
