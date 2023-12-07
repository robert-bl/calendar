import { Component } from '@angular/core';
import DayModel from '../../shared/models/day-model';
import { dateStore } from '../../shared/signals/DateStore';

@Component({
  selector: 'app-day-display',
  standalone: true,
  imports: [],
  templateUrl: './day-display.component.html',
  styleUrl: './day-display.component.scss'
})
export class DayDisplayComponent {

  dateStore = dateStore
  dayInfo = new DayModel(dateStore().activeDate)

  generateHours() {
    let hours = []
    hours.push(`12 AM`)
    for (let i = 1; i < 12; i++) {
      hours.push(`${i} AM`)
    }
    hours.push(`12 PM`)
    for (let i = 1; i < 12; i++) {
      hours.push(`${i} PM`)
    }
    return hours
  }

  hours = this.generateHours()
}
