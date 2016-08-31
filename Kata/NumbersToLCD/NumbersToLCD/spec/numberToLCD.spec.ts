import {NumberToLCD} from "../src/numberToLCD";

describe("NumberToLCD", ()=> {
    it("should the LCD version of 1", ()=> {
        let output: string = "   \n  |\n  |";
        expect(NumberToLCD.convert(1)).toEqual(output);
    });
    it("should the LCD version of 2", ()=> {
        let output: string = " _ \n _|\n|_ ";
        expect(NumberToLCD.convert(2)).toEqual(output);
    });
    it("should show the LCD version of 3", ()=> {
        let output: string = " _ \n _|\n _|";
        expect(NumberToLCD.convert(3)).toEqual(output);
    });
    it("should show the LCD version of 12", ()=> {
        let output: string =
            "    _ \n" +
            "  | _|\n" +
            "  ||_ ";
        expect(NumberToLCD.convert(12)).toEqual(output);
    });
    it("should show the LCD version of 13", ()=> {
        let output: string =
            "    _ \n" +
            "  | _|\n" +
            "  | _|";
        expect(NumberToLCD.convert(13)).toEqual(output);
    });
    it("should show the LCD version of 456", ()=> {
        let output: string =
            "    _    \n" +
            "|_||_ |_ \n" +
            "  | _||_|";
        expect(NumberToLCD.convert(456)).toEqual(output);
    });
    it("should show the LCD version of 7890", ()=> {
        let output: string =
            " _  _  _  _ \n" +
            "  ||_||_|| |\n" +
            "  ||_|  ||_|";
        expect(NumberToLCD.convert(7890)).toEqual(output);
    });
});