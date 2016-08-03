"use strict";
var numberToLCD_1 = require("../src/numberToLCD");
describe("NumberToLCD", function () {
    it("should the LCD version of 1", function () {
        var sample = new numberToLCD_1.NumberToLCD();
        var output = "   \n  |\n  |";
        expect(sample.convert(1)).toEqual(output);
    });
    it("should the LCD version of 2", function () {
        var sample = new numberToLCD_1.NumberToLCD();
        var output = " _ \n _|\n|_ ";
        expect(sample.convert(2)).toEqual(output);
    });
    it("should the LCD version of 3", function () {
        var sample = new numberToLCD_1.NumberToLCD();
        var output = " _ \n _|\n _|";
        expect(sample.convert(3)).toEqual(output);
    });
    it("should the LCD version of 12", function () {
        var sample = new numberToLCD_1.NumberToLCD();
        var output = "    _ \n  | _|\n  ||_ ";
        expect(sample.convert(12)).toEqual(output);
    });
    it("should the LCD version of 13", function () {
        var sample = new numberToLCD_1.NumberToLCD();
        var output = "    _ \n  | _|\n  | _|";
        expect(sample.convert(13)).toEqual(output);
    });
});
//# sourceMappingURL=numberToLCD.spec.js.map