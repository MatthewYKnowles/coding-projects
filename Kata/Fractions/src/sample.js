"use strict";
var Fraction = (function () {
    function Fraction(integerValue) {
        this.integerValue = integerValue;
    }
    Fraction.prototype.plus = function (fraction) {
        if (fraction.integerValue > 0) {
            return new Fraction(this.integerValue + fraction.integerValue);
        }
        return this;
    };
    Fraction.prototype.intValue = function () {
        return this.integerValue;
    };
    return Fraction;
}());
exports.Fraction = Fraction;
//# sourceMappingURL=sample.js.map