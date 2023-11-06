import { Component, OnInit } from '@angular/core';
import { MonthModel } from '../models/month-model';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {

  constructor () {}

  ngOnInit() {
  }

  weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  currentMonth = new MonthModel(new Date())
  calendarDays = this.currentMonth.generateDates()
  monthInfo = this.currentMonth.generateMonthInfo()

}
