import {NumberToLCD} from "../src/numberToLCD";

describe("NumberToLCD", ()=> {
    it("should the LCD version of 1", ()=> {
        let sample: NumberToLCD = new NumberToLCD();
        let output: string = "   \n  |\n  |";
        expect(sample.convert(1)).toEqual(output);
    });
    it("should the LCD version of 2", ()=> {
        let sample: NumberToLCD = new NumberToLCD();
        let output: string = " _ \n _|\n|_ ";
        expect(sample.convert(2)).toEqual(output);
    });
    it("should the LCD version of 3", ()=> {
        let sample: NumberToLCD = new NumberToLCD();
        let output: string = " _ \n _|\n _|";
        expect(sample.convert(3)).toEqual(output);
    });
    it("should the LCD version of 12", ()=> {
        let sample: NumberToLCD = new NumberToLCD();
        let output: string = "    _ \n  | _|\n  ||_ ";
        expect(sample.convert(12)).toEqual(output);
    });
    it("should the LCD version of 13", ()=> {
        let sample: NumberToLCD = new NumberToLCD();
        let output: string = "    _ \n  | _|\n  | _|";
        expect(sample.convert(13)).toEqual(output);
    });
});