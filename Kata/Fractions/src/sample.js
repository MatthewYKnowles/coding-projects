"use strict";
var Fraction = (function () {
    function Fraction(numerator, denominator) {
        this._numerator = numerator;
        this._denominator = denominator || 1;
    }
    Fraction.prototype.plus = function (fraction) {
        if (this._denominator != fraction._denominator) {
            var newNumerator = this._numerator * fraction._denominator + this._denominator * fraction._numerator;
            var newDenominator = this._denominator * fraction._denominator;
            return new Fraction(newNumerator, newDenominator);
        }
        var numerator = this._numerator + fraction._numerator;
        return new Fraction(numerator, this._denominator);
    };
    Fraction.prototype.isEqual = function (object) {
        if (object instanceof Fraction) {
            return this._numerator === object._numerator
                && this._denominator === object._denominator;
        }
        return false;
    };
    return Fraction;
}());
exports.Fraction = Fraction;
//# sourceMappingURL=sample.js.map