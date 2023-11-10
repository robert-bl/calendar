import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthComponent } from './month/month.component';
import { ShiftCalComponent } from './shift-cal/shift-cal.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    ShiftCalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
