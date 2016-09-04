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
        var pricesByBarcode = { "12345": "$7.95", "23456": "$12.50" };
        if (barcode === "") {
            this._display.setText("Scanning error: empty barcode");
        }
        else if (barcode === "12345") {
            this._display.setText(pricesByBarcode["12345"]);
        }
        else if (barcode === "23456") {
            this._display.setText(pricesByBarcode["23456"]);
        }
        else {
            this._display.setText("Product not found for " + barcode);
        }
    };
    return Sale;
}());
exports.Sale = Sale;
//# sourceMappingURL=pos.js.map