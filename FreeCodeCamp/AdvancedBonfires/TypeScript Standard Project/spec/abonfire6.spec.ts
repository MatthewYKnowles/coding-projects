import {Dates} from "src/abonfire6"
describe("makeFriendlyDates", ()=> {
    it("should return the date spelling out the whole month and adding st to 1", ()=> {
        let dates: Dates = new Dates(["2016-01-01", "2016-01-02"]);
        expect(dates.makeFriendlyDates()).toEqual(["January 1st","2nd"]);
    });
});