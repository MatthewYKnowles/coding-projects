export class NumberToLCD {
    convert(number): string {
        let numberAsAString = number.toString();
        let tempArray = [];
        for (let i = 0; i < 3; i++) {
            tempArray.push(this.buildRow(numberAsAString, i));
        }
        return tempArray.join("\n");
    }
    buildRow(numberAsAString, currentRowIndex) {
        let lcdLookUp: LcdLookUp = new LcdLookUp();
        let currentRow: string = "";
        for (let i = 0; i < numberAsAString.length; i++){
            currentRow += lcdLookUp.LcdString(numberAsAString.charAt(i), currentRowIndex);
        }
        return currentRow;
    }
}

class LcdLookUp {
    numberToLCDLookUp: any;
    constructor() {
        this.createLcdLookUp();
    };

    createLcdLookUp() {
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

    LcdString(number: string, section: number) {
        return this.numberToLCDLookUp[number][section];
    }
}