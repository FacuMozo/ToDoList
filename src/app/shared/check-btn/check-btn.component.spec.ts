import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBtnComponent } from './check-btn.component';

describe('CheckBtnComponent', () => {
  let component: CheckBtnComponent;
  let fixture: ComponentFixture<CheckBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckBtnComponent]
    });
    fixture = TestBed.createComponent(CheckBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
