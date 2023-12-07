import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDisplayComponent } from './day-display.component';

describe('DayDisplayComponent', () => {
  let component: DayDisplayComponent;
  let fixture: ComponentFixture<DayDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
