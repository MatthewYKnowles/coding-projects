"use strict";
var sample_1 = require("../src/sample");
describe("AddFractions", function () {
    it("should return zero for zero + zero", function () {
        var sum = new sample_1.Fraction(0).plus(new sample_1.Fraction(0));
        expect(sum.intValue()).toBe(0);
    });
    it("should return three for three + zero", function () {
        var sum = new sample_1.Fraction(3).plus(new sample_1.Fraction(0));
        expect(sum.intValue()).toBe(3);
    });
});
//# sourceMappingURL=sample.spec.js.map