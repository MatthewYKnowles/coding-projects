"use strict";
var sample_1 = require("../src/sample");
describe("AddFractions", function () {
    it("should return zero for zero + zero", function () {
        var sum = new sample_1.Fraction(0).plus(new sample_1.Fraction(0));
        expect(sum.intValue()).toBe(0);
    });
    it("should return non-zero for non-zero + zero", function () {
        var sum = new sample_1.Fraction(3).plus(new sample_1.Fraction(0));
        expect(sum.intValue()).toBe(3);
    });
    it("should return non-zero for zero + non-zero", function () {
        var sum = new sample_1.Fraction(0).plus(new sample_1.Fraction(5));
        expect(sum.intValue()).toBe(5);
    });
    it("should return non-zero for non-zero + non-zero", function () {
        var sum = new sample_1.Fraction(3).plus(new sample_1.Fraction(4));
        expect(sum.intValue()).toBe(7);
    });
});
//# sourceMappingURL=sample.spec.js.map