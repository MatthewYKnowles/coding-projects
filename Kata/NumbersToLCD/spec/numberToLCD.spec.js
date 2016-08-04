"use strict";
var numberToLCD_1 = require("../src/numberToLCD");
describe("NumberToLCD", function () {
    it("should the LCD version of 1", function () {
        var output = "   \n  |\n  |";
        expect(numberToLCD_1.NumberToLCD.convert(1)).toEqual(output);
    });
    it("should the LCD version of 2", function () {
        var output = " _ \n _|\n|_ ";
        expect(numberToLCD_1.NumberToLCD.convert(2)).toEqual(output);
    });
    it("should show the LCD version of 3", function () {
        var output = " _ \n _|\n _|";
        expect(numberToLCD_1.NumberToLCD.convert(3)).toEqual(output);
    });
    it("should show the LCD version of 12", function () {
        var output = "    _ \n" +
            "  | _|\n" +
            "  ||_ ";
        expect(numberToLCD_1.NumberToLCD.convert(12)).toEqual(output);
    });
    it("should show the LCD version of 13", function () {
        var output = "    _ \n" +
            "  | _|\n" +
            "  | _|";
        expect(numberToLCD_1.NumberToLCD.convert(13)).toEqual(output);
    });
    it("should show the LCD version of 456", function () {
        var output = "    _    \n" +
            "|_||_ |_ \n" +
            "  | _||_|";
        expect(numberToLCD_1.NumberToLCD.convert(456)).toEqual(output);
    });
    it("should show the LCD version of 7890", function () {
        var output = " _  _  _  _ \n" +
            "  ||_||_|| |\n" +
            "  ||_|  ||_|";
        expect(numberToLCD_1.NumberToLCD.convert(7890)).toEqual(output);
    });
});
//# sourceMappingURL=numberToLCD.spec.js.map