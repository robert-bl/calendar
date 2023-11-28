import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarResolutionComponent } from './calendar-resolution/calendar-resolution.component';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { ShiftCalComponent } from './shift-cal/shift-cal.component';
import { WeekComponent } from './week/week.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    MonthComponent,
    ShiftCalComponent,
    WeekComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarResolutionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
