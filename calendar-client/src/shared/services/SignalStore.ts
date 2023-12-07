import { signal } from "@angular/core";

export const calendarResolutionStore = signal({value: 'month',})

export const store = signal(0)

export const dateStore = signal({currentDate: new Date, viewDate: new Date})