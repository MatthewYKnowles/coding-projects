export class Display {

    private _text: string;

    getText(): string {
        return this._text;
    }
    setText(text: string): void {
        this._text = text;
    }
}

export class Sale {
    private _display: Display;

    constructor(display) {
        this._display = display;
    }
    onBarcode(barcode: string) {
        let pricesByBarcode = {"12345": "$7.95", "23456": "$12.50"};
        if (barcode === ""){
            this._display.setText("Scanning error: empty barcode");
        }
        else if (pricesByBarcode.hasOwnProperty(barcode)){
            this._display.setText(pricesByBarcode[barcode]);
        }
        else {
            this._display.setText("Product not found for " + barcode);
        }
    }
}