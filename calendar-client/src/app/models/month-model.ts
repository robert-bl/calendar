import { DayModel } from "./day-model"

enum MonthNames {'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'}

export class MonthModel {
    constructor(private dateInfo: Date) {}

    month = this.dateInfo.getMonth()
    year = this.dateInfo.getFullYear()
    firstWeekday = new Date(this.year, this.month, 1).getDay()

    // calendarDays: DayModel[] = []

    changeMonth(year: number, month: number) {
        this.dateInfo = new Date(year, month)
        this.month = this.dateInfo.getMonth()
        this.year = this.dateInfo.getFullYear()
        this.firstWeekday = new Date(this.year, this.month, 1).getDay()
    }

    generateCalendar() {
        let calendarDays: DayModel[] = []
        let prevMonthPaddingDays: number = 0
        let nextMonthPaddingDays: number = 0
        let date: number = 1

        while (prevMonthPaddingDays < this.firstWeekday) {
            calendarDays.push(new DayModel(new Date(this.year, this.month, 1 - this.firstWeekday + prevMonthPaddingDays)))
            prevMonthPaddingDays++
        }
        while (date <= new Date(this.year, this.month + 1, 0).getDate()) {
            calendarDays.push(new DayModel(new Date(this.year, this.month, date)))
            date++
        }
        while (calendarDays.length % 7 !== 0) {
            calendarDays.push(new DayModel(new Date(new Date(this.year, this.month + 1, 1 + nextMonthPaddingDays))))
            nextMonthPaddingDays++
        }

        return calendarDays
    }

    generateMonthInfo() {
        return `${MonthNames[this.month]}, ${this.year}`
    }
}