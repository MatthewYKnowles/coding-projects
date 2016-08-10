"use strict";
var numberLcd_1 = require("../src/numberLcd");
describe("NumberToLCD", function () {
    it("should return LCD of 1 for 1", function () {
        var numberToLCD = new numberLcd_1.NumberToLcd();
        var output = "   \n  |\n  |";
        expect(numberToLCD.convert(1)).toEqual(output);
    });
    it("should return LCD of 2 for 2", function () {
        var numberToLCD = new numberLcd_1.NumberToLcd();
        var output = " _ \n _|\n|_ ";
        expect(numberToLCD.convert(2)).toEqual(output);
    });
    it("should return LCD of 12 for 12", function () {
        var numberToLCD = new numberLcd_1.NumberToLcd();
        var output = "    _ \n  | _|\n  ||_ ";
        expect(numberToLCD.convert(12)).toEqual(output);
    });
});
//# sourceMappingURL=numberLcd.spec.js.map