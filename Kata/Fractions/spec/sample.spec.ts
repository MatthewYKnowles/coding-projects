import {Fraction} from "../src/sample";
var checkAddFractionsAsIntegers = function (addend: number, augend: number, sum: number) {
    expect(new Fraction(addend).plus(new Fraction(augend)).isEqual(new Fraction(sum))).toEqual(true);
};
describe("AddFractions", ()=> {
    it("should return zero for zero + zero", ()=> {
        checkAddFractionsAsIntegers(0,0,0);
    });
    it("should return non-zero for non-zero + zero", ()=> {
        checkAddFractionsAsIntegers(0,3,3);
    });
    it("should return non-zero for zero + non-zero", ()=> {
        checkAddFractionsAsIntegers(0,5,5);
    });
    it("should return non-zero for non-zero + non-zero", ()=> {
        checkAddFractionsAsIntegers(3,4,7);
    });
    it("should return positive 2 for negative 3 + positive 1", ()=> {
        checkAddFractionsAsIntegers(-3,2,-1);
    });
    it("should make sure that it can add with different denominators", ()=> {
        let sum: Fraction = new Fraction(1, 2).plus(new Fraction(1, 3));
        console.log(sum);
        expect(sum.isEqual(new Fraction(5, 6))).toEqual(true);
    });
});
describe("FractionsEqual", ()=> {
    it("should make sure equal fractions are equal", ()=> {
        expect(new Fraction(3,5).isEqual(new Fraction(3,5))).toEqual(true);
    });
    it("should make sure unequal fraction nominators are not equal", ()=> {
        expect(new Fraction(3,5).isEqual(new Fraction(1,5))).toEqual(false);
    });
    it("should make sure unequal fractions denominators are not equal", ()=> {
        expect(new Fraction(3,4).isEqual(new Fraction(3,7))).toEqual(false);
    });
    it("should make sure whole number equals same fraction", ()=> {
        expect(new Fraction(5,1).isEqual(new Fraction(5))).toEqual(true);
    });
    it("should make sure whole number does not equal different whole number", ()=> {
        expect(new Fraction(6).isEqual(new Fraction(5))).toEqual(false);
    });
});