import { Component } from '@angular/core';
import { calendarResolutionStore } from 'src/shared/services/SignalStore';

console.log(calendarResolutionStore())
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'calendar-client';
  calendarResolution = calendarResolutionStore

  logChange(e: string) {
    // this.calendarScale = `${e}`
    console.log(e)
    console.log(calendarResolutionStore())
  }

}
