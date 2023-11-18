import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayModel } from '../models/day-model';

@Component({
  selector: 'day-calendar',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {

  day = new DayModel(new Date, 'today')

}
