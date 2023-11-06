export class MonthModel {
    constructor(private dateInfo: Date) {}

    month = this.dateInfo.getMonth()
    year = this.dateInfo.getFullYear()
    firstWeekday = new Date(this.year, this.month, 1).getDay()

    calendarDays: string[] = []
    
    printDateInfo () {
        console.log(this.dateInfo)
        console.log(this.month)
        console.log(this.year)
        console.log(this.firstWeekday)
    }

    generateDates() {
        let paddingDay: number = 0
        let date: number = 1

        while (paddingDay < this.firstWeekday) {
            this.calendarDays.push('')
            paddingDay++
        }
        while (date <= new Date(this.year, this.month + 1, 0).getDate()) {
            this.calendarDays.push(String(date))
            date++
        }
        while (this.calendarDays.length % 7 !== 0) {
            this.calendarDays.push('')
        }

        return this.calendarDays
    }

    generateMonthInfo() {
        return `${this.month + 1}, ${this.year}`
    }
}