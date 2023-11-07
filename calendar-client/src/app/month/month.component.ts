import { Component } from '@angular/core';
import { MonthModel } from '../models/month-model';
import { DayModel } from '../models/day-model';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent{

  currentDate: Date = new Date()

  constructor () {}

  weekdays: string[] = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']

  activeMonth: MonthModel = new MonthModel(this.currentDate)
  calendarDays: DayModel[] = this.activeMonth.generateCalendar()
  monthInfo: string = this.activeMonth.generateMonthInfo()


  shiftMonth(direction: number) {
    this.activeMonth.changeMonth(this.activeMonth.year, this.activeMonth.month + direction)
    this.calendarDays = this.activeMonth.generateCalendar()
    this.monthInfo = this.activeMonth.generateMonthInfo()
  }

  checkIfCurrentDate(date: DayModel) {
    return date.date === this.currentDate.getDate() && date.month === this.currentDate.getMonth() && date.year === this.currentDate.getFullYear() ? true : false
  }

  checkIfCurrentMonth(dateMonth: number) {
    return dateMonth === this.activeMonth.month ? true : false
  }
}