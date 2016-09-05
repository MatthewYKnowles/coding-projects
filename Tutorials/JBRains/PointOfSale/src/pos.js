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
            this._display.setText("Scanning error: empty barcode");
        }
        else if (this._pricesByBarcode.hasOwnProperty(barcode)) {
            this._display.setText(this._pricesByBarcode[barcode]);
        }
        else {
            this._display.setText("Product not found for " + barcode);
        }
    };
    return Sale;
}());
exports.Sale = Sale;
//# sourceMappingURL=pos.js.map