"use strict";
var NumberToLCD = (function () {
    function NumberToLCD() {
    }
    NumberToLCD.convert = function (inputNumber) {
        var input = inputNumber.toString();
        var tempArray = [];
        for (var i = 0; i < 3; i++) {
            tempArray.push(this.buildRow(input, i));
        }
        return tempArray.join("\n");
    };
    NumberToLCD.buildRow = function (numberAsAString, currentRowIndex) {
        var lcdLookUp = new LcdLookUp();
        var currentRow = "";
        for (var i = 0; i < numberAsAString.length; i++) {
            currentRow += lcdLookUp.getLcdRowOfNumber(numberAsAString.charAt(i), currentRowIndex);
        }
        return currentRow;
    };
    return NumberToLCD;
}());
exports.NumberToLCD = NumberToLCD;
var LcdLookUp = (function () {
    function LcdLookUp() {
        this.createLcdLookUp();
    }
    ;
    LcdLookUp.prototype.createLcdLookUp = function () {
        var empty = "   ";
        var rightBar = "  |";
        var bottomBar = " _ ";
        var rightChair = " _|";
        var leftChair = "|_ ";
        var cup = "|_|";
        var arms = "| |";
        this.numberToLCDLookUp = {
            1: [empty, rightBar, rightBar],
            2: [bottomBar, rightChair, leftChair],
            3: [bottomBar, rightChair, rightChair],
            4: [empty, cup, rightBar],
            5: [bottomBar, leftChair, rightChair],
            6: [empty, leftChair, cup],
            7: [bottomBar, rightBar, rightBar],
            8: [bottomBar, cup, cup],
            9: [bottomBar, cup, rightBar],
            0: [bottomBar, arms, cup]
        };
    };
    LcdLookUp.prototype.getLcdRowOfNumber = function (number, row) {
        return this.numberToLCDLookUp[number][row];
    };
    return LcdLookUp;
}());
//# sourceMappingURL=numberToLCD.js.map