"use strict";
var sample_1 = require("../src/sample");
var checkAddFractionsAsIntegers = function (addend, augend, sum) {
    expect(new sample_1.Fraction(addend).plus(new sample_1.Fraction(augend)).isEqual(new sample_1.Fraction(sum))).toEqual(true);
};
describe("AddFractions", function () {
    it("should return zero for zero + zero", function () {
        checkAddFractionsAsIntegers(0, 0, 0);
    });
    it("should return non-zero for non-zero + zero", function () {
        checkAddFractionsAsIntegers(0, 3, 3);
    });
    it("should return non-zero for zero + non-zero", function () {
        checkAddFractionsAsIntegers(0, 5, 5);
    });
    it("should return non-zero for non-zero + non-zero", function () {
        checkAddFractionsAsIntegers(3, 4, 7);
    });
    it("should return positive 2 for negative 3 + positive 1", function () {
        checkAddFractionsAsIntegers(-3, 2, -1);
    });
    it("should make sure that it can add with different denominators", function () {
        var sum = new sample_1.Fraction(1, 2).plus(new sample_1.Fraction(1, 3));
        expect(sum.isEqual(new sample_1.Fraction(5, 6))).toEqual(true);
    });
});
describe("FractionsEqual", function () {
    it("should make sure equal fractions are equal", function () {
        expect(new sample_1.Fraction(3, 5).isEqual(new sample_1.Fraction(3, 5))).toEqual(true);
    });
    it("should make sure unequal fraction nominators are not equal", function () {
        expect(new sample_1.Fraction(3, 5).isEqual(new sample_1.Fraction(1, 5))).toEqual(false);
    });
    it("should make sure unequal fractions denominators are not equal", function () {
        expect(new sample_1.Fraction(3, 4).isEqual(new sample_1.Fraction(3, 7))).toEqual(false);
    });
    it("should make sure whole number equals same fraction", function () {
        expect(new sample_1.Fraction(5, 1).isEqual(new sample_1.Fraction(5))).toEqual(true);
    });
    it("should make sure whole number does not equal different whole number", function () {
        expect(new sample_1.Fraction(6).isEqual(new sample_1.Fraction(5))).toEqual(false);
    });
});
//# sourceMappingURL=sample.spec.js.map