import { signal } from "@angular/core"

export class DateStoreClass {
    dateStorage = signal({currentDate: new Date, viewDate: new Date})

    updateCurrentDate() {
        
    }
}