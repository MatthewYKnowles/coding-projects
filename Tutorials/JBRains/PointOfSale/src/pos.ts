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
        if (barcode === ""){
            this._display.setText("Scanning error: empty barcode");
        }
        else if (barcode === "12345"){
            this._display.setText("$7.95");
        }
        else if (barcode === "23456") {
            this._display.setText("$12.50");
        }
        else {
            this._display.setText("Product not found for " + barcode);
        }
    }
}