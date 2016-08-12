"use strict";
var LcdConverter = (function () {
    function LcdConverter() {
    }
    LcdConverter.prototype.convert = function (number) {
        var lcdObject = {
            1: ["   ", "  |", "  |"],
            2: [" _ ", " _|", "|_ "]
        };
        var numberString = number.toString();
        var newLine = "\n";
        var topLine = "";
        var middleLine = "";
        var bottomLine = "";
        for (var i = 0; i < numberString.length; i++) {
            topLine += lcdObject[numberString[i]][0];
            middleLine += lcdObject[numberString[i]][1];
            bottomLine += lcdObject[numberString[i]][2];
        }
        return topLine + newLine + middleLine + newLine + bottomLine;
    };
    return LcdConverter;
}());
exports.LcdConverter = LcdConverter;
//# sourceMappingURL=numberLcd.js.map