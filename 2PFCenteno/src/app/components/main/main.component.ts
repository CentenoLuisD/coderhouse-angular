import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionState } from 'src/app/auth/state/sesion.reducer';
import { selectUsuarioActivoState } from 'src/app/auth/state/sesion.selectors';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(
    private store: Store<SesionState>
  ) { }

  ngOnInit(): void {
    this.usuarioActivo$ = this.store.select(selectUsuarioActivoState);
  }

}
