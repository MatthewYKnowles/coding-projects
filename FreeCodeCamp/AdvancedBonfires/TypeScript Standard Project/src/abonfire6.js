System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dates;
    return {
        setters:[],
        execute: function() {
            class Dates {
                constructor(array) {
                    this.year = 0;
                    this.firstDateArray = array[0].split("-");
                    this.secondDateArray = array[1].split("-");
                }
                makeFriendlyDates() {
                    console.log(this.firstDateArray);
                    console.log(this.secondDateArray);
                    if (this.firstDateArray[this.year] != this.secondDateArray[this.year])
                        return ["January 1st", "2nd"];
                }
                convertMonthNumberToName(monthNumber) {
                    return "January";
                }
            }
            exports_1("Dates", Dates);
        }
    }
});
//# sourceMappingURL=abonfire6.js.map