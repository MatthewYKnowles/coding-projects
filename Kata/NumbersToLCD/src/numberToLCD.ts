export class NumberToLCD {
    numberToLCDLookUp: any = {
        1: ["   ", "  |", "  |"],
        2: [" _ ", " _|", "|_ "],
        3: [" _ ", " _|", " _|"]
    };
    convert(number): string {
        let numberAsAString = number.toString();
        let tempTop = "";
        let tempMiddle = "";
        let tempBottom = "";
        for (let i = 0; i < numberAsAString.length; i++){
            tempTop += this.numberToLCDLookUp[numberAsAString.charAt(i)][0];
            tempMiddle += this.numberToLCDLookUp[numberAsAString.charAt(i)][1];
            tempBottom += this.numberToLCDLookUp[numberAsAString.charAt(i)][2];
        }
        let temp = [tempTop, tempMiddle, tempBottom];
        return temp.join("\n");
    }
}