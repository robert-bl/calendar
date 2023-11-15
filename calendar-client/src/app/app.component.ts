import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'calendar-client';
  calendarScale: string = 'month'

  changeCalScale(e: string) {
    this.calendarScale = `${e}`
  }

}
