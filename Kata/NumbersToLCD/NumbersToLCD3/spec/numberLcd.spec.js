"use strict";
var numberLcd_1 = require("../src/numberLcd");
describe("LcdConverter", function () {
    it("should convert 1 to LCD of 1", function () {
        var output = "   \n  |\n  |";
        var lcdConverter = new numberLcd_1.LcdConverter();
        expect(lcdConverter.convert(1)).toEqual(output);
    });
    it("should convert 2 to LCD of 2", function () {
        var output = " _ \n _|\n|_ ";
        var lcdConverter = new numberLcd_1.LcdConverter();
        expect(lcdConverter.convert(2)).toEqual(output);
    });
    it("should convert 12 to LCD of 12", function () {
        var output = "    _ \n  | _|\n  ||_ ";
        var lcdConverter = new numberLcd_1.LcdConverter();
        expect(lcdConverter.convert(12)).toEqual(output);
    });
    it("should convert 121 to LCD of 121", function () {
        var output = "    _    \n  | _|  |\n  ||_   |";
        var lcdConverter = new numberLcd_1.LcdConverter();
        expect(lcdConverter.convert(121)).toEqual(output);
    });
});
//# sourceMappingURL=numberLcd.spec.js.map