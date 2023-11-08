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
  calendar: DayModel[] = this.activeMonth.generateCalendar()
  monthInfo: string = this.activeMonth.generateMonthInfo()


  shiftMonth(direction: number) {
    this.activeMonth.changeMonth(this.activeMonth.year, this.activeMonth.month + direction)
    this.calendar = this.activeMonth.generateCalendar()
    this.monthInfo = this.activeMonth.generateMonthInfo()
  }
}