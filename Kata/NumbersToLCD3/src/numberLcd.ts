export class LcdConverter {

    convert(number: number) {
        let lcdObject = {
            1: ["   ", "  |", "  |"],
            2: [" _ ", " _|", "|_ "]
        };
        let numberString = number.toString();
        let newLine: string = "\n";
        let topLine: string = "";
        let middleLine: string = "";
        let bottomLine: string = "";
        for (let i: number = 0; i < numberString.length; i++){
            topLine += lcdObject[numberString[i]][0];
            middleLine += lcdObject[numberString[i]][1];
            bottomLine += lcdObject[numberString[i]][2];
        }
        return topLine + newLine + middleLine + newLine + bottomLine;
    }
}