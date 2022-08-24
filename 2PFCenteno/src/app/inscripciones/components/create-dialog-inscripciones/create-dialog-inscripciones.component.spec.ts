import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogInscripcionesComponent } from './create-dialog-inscripciones.component';

describe('CreateDialogInscripcionesComponent', () => {
  let component: CreateDialogInscripcionesComponent;
  let fixture: ComponentFixture<CreateDialogInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogInscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDialogInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
