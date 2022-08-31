import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formulario: FormGroup = new FormGroup({
    usuario: new FormControl('user', [Validators.required]),
    contrasena: new FormControl('user', [Validators.required])
  })

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login () {
    console.log('Formulario: ', this.formulario);
    const usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      id: '1',
      admin: true
    }

    this.auth.iniciarSesion(usuario);
    this.router.navigate(['inicio'])
  }
}
