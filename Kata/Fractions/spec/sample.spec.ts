import {Sample} from "../src/sample"
describe("AddFractions", ()=> {
    it("should return zero + zero", ()=> {
        var sum: Fraction = new Fraction(0).plus(new Fraction(0));
        expect(sum).toBe(0);
    });
});