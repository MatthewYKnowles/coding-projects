export class Dates {
    private firstDateArray;
    private secondDateArray;
    private year = 0;
    constructor(array) {
        this.firstDateArray = array[0].split("-");
        this.secondDateArray = array[1].split("-");
    }
    makeFriendlyDates() {
        console.log(this.firstDateArray);
        console.log(this.secondDateArray);
        if (this.firstDateArray[this.year] != this.secondDateArray[this.year])
        return ["January 1st","2nd"];
    }
    convertMonthNumberToName(monthNumber) {
        return "January";
    }
}