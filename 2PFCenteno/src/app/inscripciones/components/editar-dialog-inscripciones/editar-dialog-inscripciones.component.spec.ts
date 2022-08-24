import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDialogInscripcionesComponent } from './editar-dialog-inscripciones.component';

describe('EditarDialogInscripcionesComponent', () => {
  let component: EditarDialogInscripcionesComponent;
  let fixture: ComponentFixture<EditarDialogInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDialogInscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDialogInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
