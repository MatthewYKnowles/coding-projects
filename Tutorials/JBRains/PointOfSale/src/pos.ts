export class Display {

    private _text: string;

    getText(): string {
        return this._text;
    }

    public displayProductNotFoundMessage(barcode: string) {
        this._text = "Product not found for " + barcode;
    }

    public displayEmptyBarcodeMessage() {
        this._text = "Scanning error: empty barcode";
    }

    public displayPrice(priceAsText: any) {
        this._text = priceAsText;
    }
}

export class Sale {
    private _display: Display;
    private _catalog: Catalog;

    constructor(display, catalog) {
        this._display = display;
        this._catalog = catalog;
    }
    onBarcode(barcode: string) {
        if (barcode === ""){
            this._display.displayEmptyBarcodeMessage();
            return;
        }

        let priceAsText: string = this._catalog.findPrice(barcode);
        if (priceAsText === undefined) {
            this._display.displayProductNotFoundMessage(barcode);
        } else {
            this._display.displayPrice(priceAsText);
        }
    }

}

export class Catalog {
    private _pricesByBarcode;
    constructor(pricesByBarcode) {
        this._pricesByBarcode = pricesByBarcode;
    }

    public findPrice(barcode: string) {
        return this._pricesByBarcode[barcode];
    }
}