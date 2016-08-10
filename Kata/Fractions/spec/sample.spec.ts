import {Fraction} from "../src/sample";
describe("AddFractions", ()=> {
    it("should return zero for zero + zero", ()=> {
        var sum: Fraction = new Fraction(0).plus(new Fraction(0));
        expect(sum.intValue()).toBe(0);
    });
    it("should return three for three + zero", ()=> {
        var sum: Fraction = new Fraction(3).plus(new Fraction(0));
        expect(sum.intValue()).toBe(3);
    });
});