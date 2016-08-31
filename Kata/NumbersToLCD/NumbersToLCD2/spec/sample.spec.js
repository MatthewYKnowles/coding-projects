"use strict";
var sample_1 = require("../src/sample");
describe("Number to Lcd", function () {
    it("should return lcd of one when 1 is passed in", function () {
        var numberToLcd = new sample_1.NumberToLcd();
        expect(numberToLcd.convert(1)).toBe("   \n  |\n  |");
    });
    it("should return lcd of two when 2 is passed in", function () {
        var numberToLcd = new sample_1.NumberToLcd();
        expect(numberToLcd.convert(2)).toBe(" _ \n _|\n|_ ");
    });
    it("should return lcd of one-two when 12 is passed in", function () {
        var numberToLcd = new sample_1.NumberToLcd();
        expect(numberToLcd.convert(12)).toBe("    _ \n  | _|\n  ||_ ");
    });
});
//# sourceMappingURL=sample.spec.js.map