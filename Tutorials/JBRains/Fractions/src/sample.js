"use strict";
var Fraction = (function () {
    function Fraction(numerator, denominator) {
        this._numerator = numerator;
        this._denominator = denominator || 1;
        this.reduceFraction();
    }
    Fraction.prototype.plus = function (fraction) {
        var newNumerator = this._numerator * fraction._denominator + this._denominator * fraction._numerator;
        var newDenominator = this._denominator * fraction._denominator;
        return new Fraction(newNumerator, newDenominator);
    };
    Fraction.prototype.isEqual = function (object) {
        if (object instanceof Fraction) {
            return this._numerator === object._numerator
                && this._denominator === object._denominator;
        }
        return false;
    };
    Fraction.prototype.reduceFraction = function () {
        var signOfDenominator = this._denominator < 0 ? -1 : 1;
        var lowestCommonDenominator = NumberTheory.gcd(this._numerator, this._denominator) * signOfDenominator;
        this._numerator /= lowestCommonDenominator;
        this._denominator /= lowestCommonDenominator;
    };
    return Fraction;
}());
exports.Fraction = Fraction;
var NumberTheory = (function () {
    function NumberTheory() {
    }
    NumberTheory.gcd = function (a, b) {
        while (b != 0) {
            var t = b;
            b = a % t;
            a = t;
        }
        return Math.abs(a);
    };
    return NumberTheory;
}());
//# sourceMappingURL=sample.js.map