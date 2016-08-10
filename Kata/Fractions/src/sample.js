"use strict";
var Fraction = (function () {
    function Fraction(integerValue) {
        this.integerValue = integerValue;
    }
    Fraction.prototype.plus = function (fraction) {
        return this;
    };
    Fraction.prototype.intValue = function () {
        return 0;
    };
    return Fraction;
}());
exports.Fraction = Fraction;
//# sourceMappingURL=sample.js.map