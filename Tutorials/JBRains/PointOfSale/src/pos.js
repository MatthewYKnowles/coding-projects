"use strict";
var Display = (function () {
    function Display() {
    }
    Display.prototype.getText = function () {
        return this._text;
    };
    Display.prototype.setText = function (text) {
        this._text = text;
    };
    return Display;
}());
exports.Display = Display;
var Sale = (function () {
    function Sale(display, pricesByBarcode) {
        this._display = display;
        this._pricesByBarcode = pricesByBarcode;
    }
    Sale.prototype.onBarcode = function (barcode) {
        if (barcode === "") {
            this.displayEmptyBarcodeMessage();
            return;
        }
        var priceAsText = this.findPrice(barcode);
        if (priceAsText === undefined) {
            this.displayProductNotFoundMessage(barcode);
        }
        else {
            this.displayPrice(priceAsText);
        }
    };
    Sale.prototype.displayPrice = function (priceAsText) {
        this._display.setText(priceAsText);
    };
    Sale.prototype.findPrice = function (barcode) {
        return this._pricesByBarcode[barcode];
    };
    Sale.prototype.displayProductNotFoundMessage = function (barcode) {
        this._display.setText("Product not found for " + barcode);
    };
    Sale.prototype.displayEmptyBarcodeMessage = function () {
        this._display.setText("Scanning error: empty barcode");
    };
    return Sale;
}());
exports.Sale = Sale;
//# sourceMappingURL=pos.js.map