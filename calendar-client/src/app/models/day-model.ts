export class DayModel {
    constructor (readonly dateInfo: Date, public calendarDateClass: string = '') {}
    date = this.dateInfo.getDate()
    month = this.dateInfo.getMonth()
    year = this.dateInfo.getFullYear()

}