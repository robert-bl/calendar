import { Component } from '@angular/core';

enum CalendarScales {'day', 'week', 'month'}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'calendar-client';
  calendarScale: string = CalendarScales[2]

  changeCalScale(e: number) {
    this.calendarScale = CalendarScales[e]
  }

}
