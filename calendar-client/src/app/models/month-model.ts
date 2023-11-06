import { DayModel } from "./day-model"

export class MonthModel {
    constructor(private dateInfo: Date) {}

    month = this.dateInfo.getMonth()
    year = this.dateInfo.getFullYear()
    firstWeekday = new Date(this.year, this.month, 1).getDay()

    calendarDays: DayModel[] = []

    generateCalendar() {
        let prevMonthPaddingDays: number = 0
        let nextMonthPaddingDays: number = 0
        let date: number = 1

        while (prevMonthPaddingDays < this.firstWeekday) {
            this.calendarDays.push(new DayModel(new Date(this.year, this.month, 1 - this.firstWeekday + prevMonthPaddingDays)))
            prevMonthPaddingDays++
        }
        while (date <= new Date(this.year, this.month + 1, 0).getDate()) {
            this.calendarDays.push(new DayModel(new Date(this.year, this.month, date)))
            date++
        }
        while (this.calendarDays.length % 7 !== 0) {
            this.calendarDays.push(new DayModel(new Date(new Date(this.year, this.month + 1, 1 + nextMonthPaddingDays))))
            nextMonthPaddingDays++
        }

        return this.calendarDays
    }

    generateMonthInfo() {
        return `${this.month + 1}, ${this.year}`
    }
}