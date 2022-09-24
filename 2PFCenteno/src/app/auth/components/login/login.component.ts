import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { loadSesion } from '../../state/sesion.actions';
import { loadUsuario } from 'src/app/usuarios/state/usuarios.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    usuario: new FormControl('Wunsch', [Validators.required]),
    contrasena: new FormControl('vbm2otNob_UV224', [Validators.required])
  })

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  login () {
    const usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      id: '1',
      admin: false
    }

    // TO DO: Configurar el Sesion Effect. 
    // Hacer que el componente use el Sesion Effect para obtener el usuario logueado!!!
    // 24-9-22
    this.auth.iniciarSesion(usuario).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadSesion({usuarioActivo: usuario}));
      this.store.dispatch(loadUsuario({usuario: usuario}));
      this.router.navigate(['inicio']);
    });

  }

}
