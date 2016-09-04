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
    function Sale(display) {
        this._display = display;
    }
    Sale.prototype.onBarcode = function (barcode) {
        if (barcode === "") {
            this._display.setText("Scanning error: empty barcode");
        }
        else if (barcode === "12345") {
            this._display.setText("$7.95");
        }
        else if (barcode === "23456") {
            this._display.setText("$12.50");
        }
        else {
            this._display.setText("Product not found for " + barcode);
        }
    };
    return Sale;
}());
exports.Sale = Sale;
//# sourceMappingURL=pos.js.map