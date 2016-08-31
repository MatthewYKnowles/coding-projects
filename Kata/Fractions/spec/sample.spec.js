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
describe("Reduce Fraction Test", function () {
    it("should make sure an unreduceable function stays the way it is", function () {
        expect(new sample_1.Fraction(3, 4).isEqual(new sample_1.Fraction(3, 4))).toEqual(true);
    });
    xit("reduce to not whole number", function () {
        expect(new sample_1.Fraction(3, 4).isEqual(new sample_1.Fraction(6, 8))).toEqual(true);
    });
});
describe("Greatest Common Divisor Test", function () {
    function gcd(a, b) {
        while (b != 0) {
            var t = b;
            b = a % t;
            a = t;
        }
        return a;
    }
    it("Reflexive", function () {
        expect(gcd(1, 1)).toEqual(1);
        expect(gcd(2, 2)).toEqual(2);
        expect(gcd(-1, -1)).toEqual(-1);
    });
    it("Relatively Prime", function () {
        expect(gcd(2, 3)).toEqual(1);
        expect(gcd(4, 7)).toEqual(1);
        expect(gcd(-2, -3)).toEqual(-1);
    });
    it("One is multiple of the other", function () {
        expect(gcd(3, 9)).toEqual(3);
        expect(gcd(5, 30)).toEqual(5);
    });
    it("Common Factor", function () {
        expect(gcd(6, 8)).toEqual(2);
        expect(gcd(49, 315)).toEqual(7);
        expect(gcd(-24, -28)).toEqual(-4);
    });
    it("Negatives", function () {
        expect(gcd(24, -28)).toEqual(-4);
        expect(gcd(-24, 28)).toEqual(4);
    });
});
//# sourceMappingURL=sample.spec.js.map