export class NumberToLcd {
    convert(numberToConvert: number) {
        let lcdLookup = {
        1: [
            "   ",
            "  |",
            "  |"
        ],
        2: [
            " _ ",
            " _|",
            "|_ "
        ]};
        let lines = ["", "", ""];
        let numberAsArray : string[] = numberToConvert.toString().split("");
        numberAsArray.forEach((digitAsString) => {
            var digit = lcdLookup[digitAsString];
            lines[0] += digit[0];
            lines[1] += digit[1];
            lines[2] += digit[2];
        });
        return lines.join("\n");
    }
}