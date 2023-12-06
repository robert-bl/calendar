import { signal } from "@angular/core";

export const dateStore = signal({
    currentDate: new Date,
    activeDate: new Date
})