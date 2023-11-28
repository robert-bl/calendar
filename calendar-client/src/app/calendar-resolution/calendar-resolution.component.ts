import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { calendarResolutionStore } from 'src/shared/services/SignalStore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'calendar-resolution',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
