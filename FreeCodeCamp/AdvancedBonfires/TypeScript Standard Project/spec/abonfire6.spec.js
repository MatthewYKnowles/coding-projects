System.register(["src/abonfire6"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var abonfire6_1;
    return {
        setters:[
            function (abonfire6_1_1) {
                abonfire6_1 = abonfire6_1_1;
            }],
        execute: function() {
            describe("makeFriendlyDates", () => {
                it("should return the date spelling out the whole month and adding st to 1", () => {
                    let dates = new abonfire6_1.Dates(["2016-01-01", "2016-01-02"]);
                    expect(dates.makeFriendlyDates()).toEqual(["January 1st", "2nd"]);
                });
            });
        }
    }
});
//# sourceMappingURL=abonfire6.spec.js.map