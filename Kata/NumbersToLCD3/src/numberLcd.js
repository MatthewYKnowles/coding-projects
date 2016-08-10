"use strict";
var NumberToLcd = (function () {
    function NumberToLcd() {
        this.lcdObject = {
            1: ["   ", "  |", "  |"],
            2: [" _ ", " _|", "|_ "]
        };
    }
    NumberToLcd.prototype.convert = function (number) {
        var numberAsString = number.toString();
        var newLine = "\n";
        var top = "";
        var middle = "";
        var bottom = "";
        for (var i = 0; i < numberAsString.length; i++) {
            top += this.lcdObject[numberAsString[i]][0];
            middle += this.lcdObject[numberAsString[i]][1];
            bottom += this.lcdObject[numberAsString[i]][2];
        }
        return top + newLine + middle + newLine + bottom;
    };
    return NumberToLcd;
}());
exports.NumberToLcd = NumberToLcd;
//# sourceMappingURL=numberLcd.js.map