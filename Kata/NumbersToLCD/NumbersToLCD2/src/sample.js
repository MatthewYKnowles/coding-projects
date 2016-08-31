"use strict";
var NumberToLcd = (function () {
    function NumberToLcd() {
    }
    NumberToLcd.prototype.convert = function (numberToConvert) {
        var lcdLookup = {
            1: [
                "   ",
                "  |",
                "  |"
            ],
            2: [
                " _ ",
                " _|",
                "|_ "
            ] };
        var lines = ["", "", ""];
        var numberAsArray = numberToConvert.toString().split("");
        numberAsArray.forEach(function (digitAsString) {
            var digit = lcdLookup[digitAsString];
            lines[0] += digit[0];
            lines[1] += digit[1];
            lines[2] += digit[2];
        });
        return lines.join("\n");
    };
    return NumberToLcd;
}());
exports.NumberToLcd = NumberToLcd;
//# sourceMappingURL=sample.js.map