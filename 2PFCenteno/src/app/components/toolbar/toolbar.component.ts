import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionState } from 'src/app/auth/state/sesion.reducer';
import { selectUsuarioActivoState } from 'src/app/auth/state/sesion.selectors';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  ruta!: string;
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(
    private router: Router,
    private store: Store<SesionState>
  ) { 
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.ruta = event.url;
      }
    })
  }

  ngOnInit(): void {
    this.usuarioActivo$ = this.store.select(selectUsuarioActivoState);
  }

}
