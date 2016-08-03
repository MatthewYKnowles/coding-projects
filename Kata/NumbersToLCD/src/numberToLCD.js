"use strict";
var NumberToLCD = (function () {
    function NumberToLCD() {
        this.numberToLCDLookUp = {
            1: ["   ", "  |", "  |"],
            2: [" _ ", " _|", "|_ "],
            3: [" _ ", " _|", " _|"]
        };
    }
    NumberToLCD.prototype.convert = function (number) {
        var numberAsAString = number.toString();
        var tempTop = "";
        var tempMiddle = "";
        var tempBottom = "";
        for (var i = 0; i < numberAsAString.length; i++) {
            tempTop += this.numberToLCDLookUp[numberAsAString.charAt(i)][0];
            tempMiddle += this.numberToLCDLookUp[numberAsAString.charAt(i)][1];
            tempBottom += this.numberToLCDLookUp[numberAsAString.charAt(i)][2];
        }
        var temp = [tempTop, tempMiddle, tempBottom];
        return temp.join("\n");
    };
    return NumberToLCD;
}());
exports.NumberToLCD = NumberToLCD;
//# sourceMappingURL=numberToLCD.js.map