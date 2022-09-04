import { Component, OnInit } from '@angular/core';
import { Sesion } from 'src/app/models/sesion';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userName?: string | undefined;
  user?: Sesion;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.obtenerSesion().subscribe( sesion => {
      this.userName = sesion.usuario?.usuario
    })

    this.auth.obtenerSesion().subscribe( sesion => {
      this.user = sesion
    })
  }

}
