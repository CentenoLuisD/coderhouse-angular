import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { closeSesion } from 'src/app/auth/state/sesion.actions';
import { SesionState } from 'src/app/auth/state/sesion.reducer';
import { selectUsuarioAdminState } from 'src/app/auth/state/sesion.selectors';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin$!: Observable<boolean | undefined>;

  constructor(
    private router: Router,
    private store: Store<SesionState>
  ) { }

  ngOnInit(): void {
    this.isAdmin$ = this.store.select(selectUsuarioAdminState);
  }

  cerrarSesion () {
    this.store.dispatch(closeSesion())
    this.router.navigate(['auth/login'])
  }

}
