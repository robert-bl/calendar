export class DayModel {
    constructor (private dateInfo: Date, public calendarDateClass: string = '') {}
    date = this.dateInfo.getDate()
    month = this.dateInfo.getMonth()
    year = this.dateInfo.getFullYear()

    changeDay(year: number, month: number, date:number): void {
        this.dateInfo = new Date(year, month, date)
        this.date = this.dateInfo.getDate()
        this.month = this.dateInfo.getMonth()
        this.year = this.dateInfo.getFullYear()
    }

    generateCalendar () {
        let today = new Date

        const checkIfCurrentDate = (): boolean => {
            return this.date === today.getDate() && this.month === today.getMonth() && this.year === today.getFullYear()
        }

        this.calendarDateClass = checkIfCurrentDate() ? 'today' : ''
        console.log(this)
        return this
    }

}