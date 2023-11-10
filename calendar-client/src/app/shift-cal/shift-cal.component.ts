import { Component } from '@angular/core';
import { EventService } from '../../shared/services/EventServices';

@Component({
  selector: 'shift-cal',
  templateUrl: './shift-cal.component.html',
  styleUrls: ['./shift-cal.component.css']
})
export class ShiftCalComponent {

  constructor(private events: EventService) {}

  shiftCal(direction: number) {
    this.events.emit('shiftCalendar', direction)
  }
}
