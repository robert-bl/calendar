import { Component } from '@angular/core';
import { EventService } from '../../shared/services/EventServices';
import { dateStore } from 'src/shared/services/SignalStore';
import { store } from 'src/shared/services/SignalStore';

@Component({
  selector: 'shift-cal',
  templateUrl: './shift-cal.component.html',
  styleUrls: ['./shift-cal.component.css']
})
export class ShiftCalComponent {

  constructor(private events: EventService) {}

  dateStore=dateStore

  shiftCal(direction: number) {
    this.events.emit('shiftCalendar', direction)
  }

  upDate () {
    store.mutate()
  }
}
