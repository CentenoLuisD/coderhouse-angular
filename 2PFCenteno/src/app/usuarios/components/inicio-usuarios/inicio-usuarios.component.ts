import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-usuarios',
  templateUrl: './inicio-usuarios.component.html',
  styleUrls: ['./inicio-usuarios.component.css']
})
export class InicioUsuariosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redireccionar () {
    this.router.navigate(['usuarios/lista']);
  }

}
