import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogUsuariosComponent } from './create-dialog-usuarios.component';

describe('CreateDialogUsuariosComponent', () => {
  let component: CreateDialogUsuariosComponent;
  let fixture: ComponentFixture<CreateDialogUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDialogUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
