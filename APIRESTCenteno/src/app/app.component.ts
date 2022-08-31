import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from './models/sesion';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  sesion$!: Observable<Sesion>;

  constructor (
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.sesion$ = this.auth.obtenerSesion();
  }

}
