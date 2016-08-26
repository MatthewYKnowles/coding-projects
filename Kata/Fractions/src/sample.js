"use strict";
var Fraction = (function () {
    function Fraction(numerator, denominator) {
        this._numerator = numerator;
        this._denominator = denominator | 1;
    }
    Fraction.prototype.plus = function (fraction) {
        var numerator = this._numerator + fraction._numerator;
        return new Fraction(numerator, this._denominator);
    };
    Fraction.prototype.isEqual = function (object) {
        if (object instanceof Fraction) {
            console.log(object);
            return this._numerator === object._numerator
                && this._denominator === object._denominator;
        }
        return false;
    };
    return Fraction;
}());
exports.Fraction = Fraction;
//# sourceMappingURL=sample.js.map