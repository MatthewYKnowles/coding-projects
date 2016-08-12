"use strict";
var Fraction = (function () {
    function Fraction(integerValue) {
        this.integerValue = integerValue;
    }
    Fraction.prototype.plus = function (fraction) {
        return new Fraction(this.integerValue + fraction.integerValue);
    };
    Fraction.prototype.intValue = function () {
        return this.integerValue;
    };
    return Fraction;
}());
exports.Fraction = Fraction;
//# sourceMappingURL=sample.js.map