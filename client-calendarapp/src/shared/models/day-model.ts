export default class DayModel {
    constructor(private dateInfo: Date) {}

    date = this.dateInfo.getDate()
    month = this.dateInfo.getMonth()
    year = this.dateInfo.getFullYear()
}