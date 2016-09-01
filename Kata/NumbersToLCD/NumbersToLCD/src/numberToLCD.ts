export class NumberToLCD {

    static convert(inputNumber): string {
        let input: string = inputNumber.toString();
        let lcdLookUp: LcdLookUp = new LcdLookUp();
        let tempArray: any = ["","",""];
        for (let currentNumber = 0; currentNumber < input.length; currentNumber++) {
            for (let rowIndex = 0; rowIndex < 3; rowIndex++){
                tempArray[rowIndex] += lcdLookUp.getLcdRowOfNumber(input.charAt(currentNumber), rowIndex);
            }
        }
        return tempArray.join("\n");
    }
}

class LcdLookUp {
    private numberToLCDLookUp: any;
    constructor() {
        this.createLcdLookUp();
    };

    private createLcdLookUp(): void {
        let empty: string = "   ";
        let rightBar: string = "  |";
        let bottomBar: string = " _ ";
        let rightChair: string = " _|";
        let leftChair: string = "|_ ";
        let cup: string = "|_|";
        let arms: string = "| |";
        this.numberToLCDLookUp = {
            1: [empty, rightBar, rightBar],
            2: [bottomBar, rightChair, leftChair],
            3: [bottomBar, rightChair, rightChair],
            4: [empty, cup, rightBar],
            5: [bottomBar, leftChair, rightChair],
            6: [empty, leftChair, cup],
            7: [bottomBar, rightBar, rightBar],
            8: [bottomBar, cup, cup],
            9: [bottomBar, cup, rightBar],
            0: [bottomBar, arms, cup]
        };
    }

    public getLcdRowOfNumber(number: string, row: number): string {
        return this.numberToLCDLookUp[number][row];
    }
}