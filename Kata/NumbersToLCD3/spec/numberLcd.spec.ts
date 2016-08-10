import {NumberToLcd} from "../src/numberLcd";
describe("NumberToLCD", ()=> {
    it("should return LCD of 1 for 1", ()=> {
        let numberToLCD: NumberToLcd = new NumberToLcd();
        var output: string = "   \n  |\n  |";
        expect(numberToLCD.convert(1)).toEqual(output)
    });
    it("should return LCD of 2 for 2", ()=> {
        let numberToLCD: NumberToLcd = new NumberToLcd();
        var output: string = " _ \n _|\n|_ ";
        expect(numberToLCD.convert(2)).toEqual(output)
    });
    it("should return LCD of 12 for 12", ()=> {
        let numberToLCD: NumberToLcd = new NumberToLcd();
        var output: string = "    _ \n  | _|\n  ||_ ";
        expect(numberToLCD.convert(12)).toEqual(output)
    });
});