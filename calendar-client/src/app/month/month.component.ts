import { Component } from '@angular/core';
import { MonthModel } from '../models/month-model';
import { DayModel } from '../models/day-model';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {

  constructor () {}

  weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  currentMonth: MonthModel = new MonthModel(new Date())
  monthOffset: number = 0
  activeMonth: MonthModel = this.currentMonth
  calendarDays: DayModel[] = this.activeMonth.generateCalendar()
  monthInfo: string = this.activeMonth.generateMonthInfo()


  changeOffset(incDec: number) {
    this.monthOffset += incDec
    this.activeMonth = new MonthModel(new Date(this.currentMonth.year, this.currentMonth.month + this.monthOffset))
    this.calendarDays = this.activeMonth.generateCalendar()
    this.monthInfo = this.activeMonth.generateMonthInfo()
  }
}
