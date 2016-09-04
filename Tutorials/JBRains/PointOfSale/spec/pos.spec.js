"use strict";
var pos_1 = require("../src/pos");
describe("Sell One Item", function () {
    it("should find the product", function () {
        var display = new pos_1.Display();
        var sale = new pos_1.Sale();
        sale.onBarcode("12345");
        expect(display.getText()).toBe("$7.95");
    });
});
//# sourceMappingURL=pos.spec.js.map