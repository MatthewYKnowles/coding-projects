import {LcdConverter} from "../src/numberLcd";
describe("LcdConverter", ()=> {
    it("should convert 1 to LCD of 1", ()=> {
        var output = "   \n  |\n  |";
        var lcdConverter: LcdConverter = new LcdConverter();
        expect(lcdConverter.convert(1)).toEqual(output);
    });
    it("should convert 2 to LCD of 2", ()=> {
        var output = " _ \n _|\n|_ ";
        var lcdConverter: LcdConverter = new LcdConverter();
        expect(lcdConverter.convert(2)).toEqual(output);
    });
    it("should convert 12 to LCD of 12", ()=> {
        var output = "    _ \n  | _|\n  ||_ ";
        var lcdConverter: LcdConverter = new LcdConverter();
        expect(lcdConverter.convert(12)).toEqual(output);
    });
    it("should convert 121 to LCD of 121", ()=> {
        var output = "    _    \n  | _|  |\n  ||_   |";
        var lcdConverter: LcdConverter = new LcdConverter();
        expect(lcdConverter.convert(121)).toEqual(output);
    });
});