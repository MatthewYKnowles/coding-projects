"use strict";
var NumberToLCD = (function () {
    function NumberToLCD() {
    }
    NumberToLCD.prototype.convert = function (number) {
        var numberToLcd = {
            1: ["   ", "  |", "  |"],
            2: [" _ ", " _|", "|_ "]
        };
        var bottomRow = "";
        var topRow = "";
        var middleRow = "";
        var newLine = "\n";
        var stringOfNumber = number.toString();
        for (var i = 0; i < stringOfNumber.length; i++) {
            topRow += numberToLcd[stringOfNumber[i]][0];
            middleRow += numberToLcd[stringOfNumber[i]][1];
            bottomRow += numberToLcd[stringOfNumber[i]][2];
        }
        return topRow + newLine + middleRow + newLine + bottomRow;
    };
    return NumberToLCD;
}());
exports.NumberToLCD = NumberToLCD;
//# sourceMappingURL=numberLcd.js.map