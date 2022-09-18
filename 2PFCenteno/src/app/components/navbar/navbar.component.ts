import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { closeSesion } from 'src/app/auth/state/sesion.actions';
import { SesionState } from 'src/app/auth/state/sesion.reducer';
import { selectSesionActivaState } from 'src/app/auth/state/sesion.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<SesionState>
  ) { }

  ngOnInit(): void {
  }

  cerrarSesion () {
    this.store.dispatch(closeSesion())
    this.router.navigate(['auth/login'])
  }

}
