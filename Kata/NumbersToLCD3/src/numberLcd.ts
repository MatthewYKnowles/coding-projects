export class NumberToLCD {

    convert(number:number) {
        let numberToLcd = {
            1: ["   ", "  |", "  |"],
            2: [" _ "," _|","|_ "]
        };
        var bottomRow:string = "";
        var topRow:string = "";
        var middleRow:string = "";
        var newLine = "\n";
        let stringOfNumber = number.toString();
        for (let i = 0; i < stringOfNumber.length; i++){
            topRow += numberToLcd[stringOfNumber[i]][0];
            middleRow += numberToLcd[stringOfNumber[i]][1];
            bottomRow += numberToLcd[stringOfNumber[i]][2];
        }
        return topRow + newLine + middleRow + newLine + bottomRow;
    }
}