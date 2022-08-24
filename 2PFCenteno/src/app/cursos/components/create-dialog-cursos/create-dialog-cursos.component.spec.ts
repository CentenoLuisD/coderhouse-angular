import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogCursosComponent } from './create-dialog-cursos.component';

describe('CreateDialogCursosComponent', () => {
  let component: CreateDialogCursosComponent;
  let fixture: ComponentFixture<CreateDialogCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDialogCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
