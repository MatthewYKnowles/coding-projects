import {Fraction} from "../src/sample";
describe("AddFractions", ()=> {
    it("should return zero for zero + zero", ()=> {
        var sum: Fraction = new Fraction(0).plus(new Fraction(0));
        expect(sum.intValue()).toBe(0);
    });
    it("should return non-zero for non-zero + zero", ()=> {
        var sum: Fraction = new Fraction(3).plus(new Fraction(0));
        expect(sum.intValue()).toBe(3);
    });
    it("should return non-zero for zero + non-zero", ()=> {
        var sum: Fraction = new Fraction(0).plus(new Fraction(5));
        expect(sum.intValue()).toBe(5);
    });
    it("should return non-zero for non-zero + non-zero", ()=> {
        var sum: Fraction = new Fraction(3).plus(new Fraction(4));
        expect(sum.intValue()).toBe(7);
    });
});