import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDialogCursosComponent } from './editar-dialog-cursos.component';

describe('EditarDialogCursosComponent', () => {
  let component: EditarDialogCursosComponent;
  let fixture: ComponentFixture<EditarDialogCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDialogCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDialogCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
