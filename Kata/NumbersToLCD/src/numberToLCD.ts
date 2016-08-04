export class NumberToLCD {

    static convert(inputNumber): string {
        let input: string = inputNumber.toString();
        let tempArray: any = [];
        for (let i = 0; i < 3; i++) {
            tempArray.push(this.buildRow(input, i));
        }
        return tempArray.join("\n");
    }
    static buildRow(numberAsAString, currentRowIndex) {
        let lcdLookUp: LcdLookUp = new LcdLookUp();
        let currentRow: string = "";
        for (let i = 0; i < numberAsAString.length; i++){
            currentRow += lcdLookUp.getLcdRowOfNumber(numberAsAString.charAt(i), currentRowIndex);
        }
        return currentRow;
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