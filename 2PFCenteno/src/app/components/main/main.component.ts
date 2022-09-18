import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionState } from 'src/app/auth/state/sesion.reducer';
import { selectUsuarioActivoState } from 'src/app/auth/state/sesion.selectors';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userName?: string | undefined;
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(
    private store: Store<SesionState>,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    // this.auth.obtenerSesion().subscribe( sesion => {
    //   this.userName = sesion.usuario?.usuario
    // })

    // this.auth.obtenerSesion().subscribe( sesion => {
    //   this.user = sesion
    // })

    this.usuarioActivo$ = this.store.select(selectUsuarioActivoState);
  }

}
