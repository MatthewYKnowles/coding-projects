"use strict";
var numberLcd_1 = require("../src/numberLcd");
describe("NumberToLCD", function () {
    it("should convert 1 to LCD of 1", function () {
        var numberToLCD = new numberLcd_1.NumberToLCD();
        var output = "   \n" +
            "  |\n" +
            "  |";
        expect(numberToLCD.convert(1)).toEqual(output);
    });
    it("should convert 2 to LCD of 2", function () {
        var numberToLCD = new numberLcd_1.NumberToLCD();
        var output = " _ \n" +
            " _|\n" +
            "|_ ";
        expect(numberToLCD.convert(2)).toEqual(output);
    });
    it("should convert 12 to LCD of 12", function () {
        var numberToLCD = new numberLcd_1.NumberToLCD();
        var output = "    _ \n" +
            "  | _|\n" +
            "  ||_ ";
        expect(numberToLCD.convert(12)).toEqual(output);
    });
});
//# sourceMappingURL=numberLcd.spec.js.map