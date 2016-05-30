describe("makeFriendlyDates", ()=> {
    it("should return the date spelling out the whole month and adding st to 1", ()=> {
        expect(makeFriendlyDates(["2016-01-01", "2016-01-02"])).toEqual(["January 1st","2nd"]);
    });
    it("should return 3rd", ()=> {
        expect(makeFriendlyDates(["2016-01-01", "2016-01-03"])).toEqual(["January 1st","3rd"]);
    });
    it("should return for days in February", ()=> {
        expect(makeFriendlyDates(["2016-02-04", "2016-02-28"])).toEqual(["February 4th","28th"]);
    });
    it("should add in months in each array if from different months", ()=> {
        expect(makeFriendlyDates(["2016-03-04", "2016-04-29"])).toEqual(["March 4th, 2016","April 29th"]);
    });
    it("should add in year if they are different", ()=> {
        expect(makeFriendlyDates(["2016-07-21", "2017-08-05"])).toEqual(["July 21st, 2016","August 5th, 2017"]);
    });
    it("should add in year to only the first array if is less than a year but different months", ()=> {
        expect(makeFriendlyDates(["2016-07-21", "2016-08-05"])).toEqual(["July 21st, 2016","August 5th"]);
    });
    it("should return one of the arrays if they are both the same", ()=> {
        expect(makeFriendlyDates(["2018-01-13", "2018-01-13"])).toEqual(["January 13th, 2018"]);
    });
    it("should add the year when the date is the same but the year is different", ()=> {
        expect(makeFriendlyDates(["2022-09-05", "2023-09-05"])).toEqual(["September 5th, 2022","September 5th, 2023"]);
    });
    it("should work for just under one year", ()=> {
        expect(makeFriendlyDates(["2022-09-05", "2023-09-04"])).toEqual(["September 5th, 2022","September 4th"]);
    });
});
