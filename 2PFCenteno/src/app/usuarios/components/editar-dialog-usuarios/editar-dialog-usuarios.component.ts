import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { loadUsuarios } from '../../state/usuarios.actions';
import { UsuariosState } from '../../state/usuarios.reducer';

@Component({
  selector: 'app-editar-dialog-usuarios',
  templateUrl: './editar-dialog-usuarios.component.html',
  styleUrls: ['./editar-dialog-usuarios.component.css']
})
export class EditarDialogUsuariosComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogUsuariosComponent>,
    private usuariosService: UsuariosService,
    private store: Store<UsuariosState>,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario
  ) {
      this.formulario = fb.group({
      usuario: new FormControl(usuario.usuario, [Validators.required]),
      contrasena: new FormControl(usuario.contrasena, [Validators.required]),
      admin: new FormControl(usuario.admin, [Validators.required])
    })
   }

  ngOnInit(): void {
  }

  actualizar(){
    const u: Usuario = {
      id: this.usuario.id,
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin
    }
    this.usuariosService.modificarUsuario(u).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadUsuarios());
      this.dialogRef.close(usuario);
    });
  }

  cerrar(){
    this.dialogRef.close();
  }

}
