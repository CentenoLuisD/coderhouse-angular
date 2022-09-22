import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDialogUsuariosComponent } from './editar-dialog-usuarios.component';

describe('EditarDialogUsuariosComponent', () => {
  let component: EditarDialogUsuariosComponent;
  let fixture: ComponentFixture<EditarDialogUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDialogUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDialogUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
