import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarResolutionComponent } from './calendar-resolution.component';

describe('CalendarResolutionComponent', () => {
  let component: CalendarResolutionComponent;
  let fixture: ComponentFixture<CalendarResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarResolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
