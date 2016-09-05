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
    private _pricesByBarcode: any;

    constructor(display, pricesByBarcode) {
        this._display = display;
        this._pricesByBarcode = pricesByBarcode;
    }
    onBarcode(barcode: string) {
        if (barcode === ""){
            this.displayEmptyBarcodeMessage();
            return;
        }
        if (this._pricesByBarcode.hasOwnProperty(barcode)){
            this.displayPrice(this.findPrice(barcode));
        }
        else {
            this.displayProductNotFoundMessage(barcode);
        }
    }

    private displayPrice(priceAsText: any) {
        this._display.setText(priceAsText);
    }

    private findPrice(barcode: string) {
        return this._pricesByBarcode[barcode];
    }

    private displayProductNotFoundMessage(barcode: string) {
        this._display.setText("Product not found for " + barcode);
    }

    private displayEmptyBarcodeMessage() {
        this._display.setText("Scanning error: empty barcode");
    }
}