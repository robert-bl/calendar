import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftCalComponent } from './shift-cal.component';

describe('ShiftCalComponent', () => {
  let component: ShiftCalComponent;
  let fixture: ComponentFixture<ShiftCalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftCalComponent]
    });
    fixture = TestBed.createComponent(ShiftCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
