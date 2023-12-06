import { Component } from '@angular/core';
import { calendarResolutionStore } from 'src/shared/services/SignalStore';

@Component({
  selector: 'calendar-resolution',
  standalone: false,
  templateUrl: './calendar-resolution.component.html',
  styleUrl: './calendar-resolution.component.css'
})
export class CalendarResolutionComponent {

  calendarResolution = calendarResolutionStore

  logChange(e: any) {
    // this.calendarScale = `${e}`
    console.log(e)
    console.log(calendarResolutionStore())
  }

}
