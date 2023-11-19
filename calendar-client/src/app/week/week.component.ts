import { Component, OnInit } from '@angular/core';
import { WeekModel } from '../models/week-model';
import { DayModel } from '../models/day-model';
import { EventService } from 'src/shared/services/EventServices';

@Component({
  selector: 'week-calendar',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  constructor (private events: EventService) {}

  ngOnInit(): void {
    this.events.listen('shiftCalendar', (direction: number) => {
      this.shiftWeek(direction)
    })
  }

  //hardcode variables
  weekdays: string[] = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']

  //current temporal variables
  currentDate: Date = new Date()
  activeWeek: WeekModel = new WeekModel(this.currentDate)

  //display variables
  calendar: DayModel[] = this.activeWeek.generateCalendar()
  weekInfo: string = 'this.activeMonth.generateMonthInfo()'


  shiftWeek(direction: number): void {
    this.activeWeek.changeWeek(this.activeWeek.year, this.activeWeek.month, this.activeWeek.date + direction*7)
    this.calendar = this.activeWeek.generateCalendar()
    // this.monthInfo = this.activeMonth.generateMonthInfo()
  }

}
