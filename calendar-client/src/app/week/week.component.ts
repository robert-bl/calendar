import { Component } from '@angular/core';
import { WeekModel } from '../models/week-model';
import { DayModel } from '../models/day-model';

@Component({
  selector: 'week-calendar',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent {




  // constructor (private events: EventService) {}

  // ngOnInit(): void {
  //   this.events.listen('shiftCalendar', (direction: number) => {
  //     this.shiftMonth(direction)
  //   })
  // }

  //hardcode variables
  weekdays: string[] = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']

  //current temporal variables
  currentDate: Date = new Date()
  activeWeek: WeekModel = new WeekModel(this.currentDate)

  //display variables
  calendar: DayModel[] = this.activeWeek.generateCalendar()
  weekInfo: string = 'this.activeMonth.generateMonthInfo()'


  // shiftMonth(direction: number): void {
  //   this.activeMonth.changeMonth(this.activeMonth.year, this.activeMonth.month + direction)
  //   this.calendar = this.activeMonth.generateCalendar()
  //   this.monthInfo = this.activeMonth.generateMonthInfo()
  // }

}
