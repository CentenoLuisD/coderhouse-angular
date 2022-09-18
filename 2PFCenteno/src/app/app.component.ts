import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionState } from './auth/state/sesion.reducer';
import { selectSesionActivaState } from './auth/state/sesion.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sesionActiva$?: Observable<boolean>;

  constructor (
    private store: Store<SesionState>
  ) {}

  ngOnInit(): void {
    this.sesionActiva$ = this.store.select(selectSesionActivaState);
  }

}
