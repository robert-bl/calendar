import { Component, OnInit } from '@angular/core';
import { MonthModel } from '../models/month-model';
import { DayModel } from '../models/day-model';
import { EventService } from '../../shared/services/EventServices';


@Component({
  selector: 'month-calendar',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent implements OnInit{

  constructor (private events: EventService) {}

  ngOnInit(): void {
    this.events.listen('shiftCalendar', (direction: number) => {
      this.shiftMonth(direction)
    })
  }

  //hardcode variables
  weekdays: string[] = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']

  //current temporal variables
  currentDate: Date = new Date()
  activeMonth: MonthModel = new MonthModel(new Date())
  // activeMonth: MonthModel = new MonthModel(dateStore().viewDate)

  //display variables
  calendar: DayModel[] = this.activeMonth.generateCalendar()
  monthInfo: string = this.activeMonth.generateMonthInfo()


  shiftMonth(direction: number): void {
    this.activeMonth.changeMonth(this.activeMonth.year, this.activeMonth.month + direction)
    this.calendar = this.activeMonth.generateCalendar()
    this.monthInfo = this.activeMonth.generateMonthInfo()
  }

  change () {

  }

}