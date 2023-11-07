export class DayModel {
    constructor (readonly dateInfo: Date) {}
    date = this.dateInfo.getDate()
    month = this.dateInfo.getMonth()
    year = this.dateInfo.getFullYear()

}