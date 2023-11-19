import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayModel } from '../models/day-model';
import { EventService } from 'src/shared/services/EventServices';

@Component({
  selector: 'day-calendar',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent implements OnInit {

  constructor (private events: EventService) {}

  ngOnInit(): void {
    this.events.listen('shiftCalendar', (direction: number) => {
      this.shiftDay(direction)
    })
  }

  day = new DayModel(new Date, 'today')
  calendar = this.day

  shiftDay(direction: number): void {
      this.day.changeDay(this.day.year, this.day.month, this.day.date + direction)
      this.calendar = this.day.generateCalendar()
  }
}