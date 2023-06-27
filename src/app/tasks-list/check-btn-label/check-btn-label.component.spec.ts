import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBtnLabelComponent } from './check-btn-label.component';

describe('CheckBtnLabelComponent', () => {
  let component: CheckBtnLabelComponent;
  let fixture: ComponentFixture<CheckBtnLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckBtnLabelComponent]
    });
    fixture = TestBed.createComponent(CheckBtnLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
