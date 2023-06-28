import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTareaComponent } from './form-add-tarea.component';

describe('FormAddTareaComponent', () => {
  let component: FormAddTareaComponent;
  let fixture: ComponentFixture<FormAddTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddTareaComponent]
    });
    fixture = TestBed.createComponent(FormAddTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
