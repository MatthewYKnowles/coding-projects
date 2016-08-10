export class NumberToLcd {
    lcdObject = {
        1: ["   ", "  |", "  |"],
        2: [" _ ", " _|", "|_ "]
    };

    convert(number:number) {
        let numberAsString = number.toString();
        var newLine = "\n";
        var top: string = "";
        var middle: string = "";
        var bottom: string = "";
        for (let i = 0; i < numberAsString.length; i++){
            top += this.lcdObject[numberAsString[i]][0];
            middle += this.lcdObject[numberAsString[i]][1];
            bottom += this.lcdObject[numberAsString[i]][2];
        }
        return top + newLine + middle + newLine + bottom;
    }
}