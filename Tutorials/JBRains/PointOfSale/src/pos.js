"use strict";
var Sale = (function () {
    function Sale() {
    }
    Sale.prototype.onBarcode = function (barcode) {
    };
    return Sale;
}());
exports.Sale = Sale;
var Display = (function () {
    function Display() {
    }
    Display.prototype.getText = function () {
        return "$7.95";
    };
    return Display;
}());
exports.Display = Display;
//# sourceMappingURL=pos.js.map