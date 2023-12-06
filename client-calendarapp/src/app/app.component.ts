import { Component } from '@angular/core';
import { dateStore } from 'src/shared/signals/DateStore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-calendarapp';

  dateS = dateStore

  resetActiveDate() {
    dateStore.mutate(val => val.activeDate = new Date)
  }
}
