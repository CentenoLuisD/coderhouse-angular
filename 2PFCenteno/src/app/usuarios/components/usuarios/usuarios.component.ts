import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { loadUsuarios, loadUsuario } from '../../state/usuarios.actions';
import { UsuariosState } from '../../state/usuarios.reducer';
import { selectUsuariosArrayState, selectLoadingState, selectCurrentUserState } from '../../state/usuarios.selectors';
import { CreateDialogUsuariosComponent } from '../create-dialog-usuarios/create-dialog-usuarios.component';
import { EditarDialogUsuariosComponent } from '../editar-dialog-usuarios/editar-dialog-usuarios.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios$!: Observable<Usuario[]>;
  usuario$!: Observable<Usuario>;
  loading$!: Observable<boolean>;
  columnas: string[] = ['id', 'usuario', 'admin', 'actions'];
  
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private dialog: MatDialog,
    private usuariosService: UsuariosService,
    private store: Store<any> 
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsuarios());
    
    this.usuario$ = this.store.select(selectCurrentUserState);
    this.usuarios$ = this.store.select(selectUsuariosArrayState);
    this.loading$ = this.store.select(selectLoadingState);

    this.usuarios$.subscribe((usuarios: Usuario[]) => {
      this.dataSource.data = usuarios;
    })

  }

  eliminar(id: string){
    this.usuariosService.eliminarUsuario(id).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadUsuarios());
      alert(`${usuario.id} - ${usuario.usuario} eliminado satisfactoriamente`);
    });
  }

  //Opens the Modal to edit the Student
  editar(elemento: Usuario){
  
    const dialogRef = this.dialog.open(EditarDialogUsuariosComponent, {
      width: '600px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if(resultado){
        alert(`ID: ${elemento.id}-${elemento.usuario} fue editado satisfactoriamente`);
      }
    })
  }

  crear() {
    const dialogRef = this.dialog.open(CreateDialogUsuariosComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        alert(`ID: ${resultado.id} - ${resultado.usuario} fue creado satisfactoriamente`);
      }
    })
  }

  //Search input handler
  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}
