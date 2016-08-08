import {NumberToLCD} from "../src/numberLcd";
describe("NumberToLCD", ()=> {
    it("should convert 1 to LCD of 1", ()=> {
       let numberToLCD: NumberToLCD = new NumberToLCD();
        var output = 
            "   \n" +
            "  |\n" +
            "  |";
        expect(numberToLCD.convert(1)).toEqual(output)
    });

    it("should convert 2 to LCD of 2", ()=> {
       let numberToLCD: NumberToLCD = new NumberToLCD();
        var output =
            " _ \n" +
            " _|\n" +
            "|_ ";
        expect(numberToLCD.convert(2)).toEqual(output)
    });

    it("should convert 12 to LCD of 12", ()=> {
       let numberToLCD: NumberToLCD = new NumberToLCD();
        var output =
            "    _ \n" +
            "  | _|\n" +
            "  ||_ ";
        expect(numberToLCD.convert(12)).toEqual(output)
    });
});