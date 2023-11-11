import { DayModel } from "./day-model";

export class WeekModel {

    constructor (private dateInfo: Date) {}

    date = this.dateInfo.getDate()
    month = this.dateInfo.getMonth()
    year = this.dateInfo.getFullYear()

    generateCalendar(): DayModel[] {
        let calendar: DayModel[] = []
        let dayOfWeek = this.dateInfo.getDay()
        let today = new Date

        const checkIfCurrentDate = (): boolean => {
            return this.date - dayOfWeek === today.getDate() && this.month === today.getMonth() && this.year === today.getFullYear()
        }

        for (let i = 0; i < 7; i++) {
            let insertDate = 
            calendar.push(new DayModel(new Date(this.year, this.month, this.date - dayOfWeek), checkIfCurrentDate() ? 'today' : ''))
            dayOfWeek--
        }
        
        return calendar
    }

}