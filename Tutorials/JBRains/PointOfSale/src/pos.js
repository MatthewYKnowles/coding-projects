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
    Display.prototype.displayProductNotFoundMessage = function (barcode) {
        this.setText("Product not found for " + barcode);
    };
    Display.prototype.displayEmptyBarcodeMessage = function () {
        this.setText("Scanning error: empty barcode");
    };
    Display.prototype.displayPrice = function (priceAsText) {
        this.setText(priceAsText);
    };
    return Display;
}());
exports.Display = Display;
var Sale = (function () {
    function Sale(display, catalog) {
        this._display = display;
        this._catalog = catalog;
    }
    Sale.prototype.onBarcode = function (barcode) {
        if (barcode === "") {
            this._display.displayEmptyBarcodeMessage();
            return;
        }
        var priceAsText = this._catalog.findPrice(barcode);
        if (priceAsText === undefined) {
            this._display.displayProductNotFoundMessage(barcode);
        }
        else {
            this._display.displayPrice(priceAsText);
        }
    };
    return Sale;
}());
exports.Sale = Sale;
var Catalog = (function () {
    function Catalog(pricesByBarcode) {
        this._pricesByBarcode = pricesByBarcode;
    }
    Catalog.prototype.findPrice = function (barcode) {
        return this._pricesByBarcode[barcode];
    };
    return Catalog;
}());
exports.Catalog = Catalog;
//# sourceMappingURL=pos.js.map