export class DayModel {
    constructor (readonly dateInfo: Date) {}
    date = this.dateInfo.getDate()

}