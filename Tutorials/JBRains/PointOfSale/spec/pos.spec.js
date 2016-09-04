"use strict";
var pos_1 = require("../src/pos");
describe("Sell One Item", function () {
    it("should find the product", function () {
        var display = new pos_1.Display();
        var sale = new pos_1.Sale(display);
        sale.onBarcode("12345");
        expect(display.getText()).toBe("$7.95");
    });
    it("should find another product", function () {
        var display = new pos_1.Display();
        var sale = new pos_1.Sale(display);
        sale.onBarcode("23456");
        expect(display.getText()).toBe("$12.50");
    });
    it("should show product not found", function () {
        var display = new pos_1.Display();
        var sale = new pos_1.Sale(display);
        sale.onBarcode("99999");
        expect(display.getText()).toBe("Product not found for 99999");
    });
    it("should show empty barcode when no barcode passed in", function () {
        var display = new pos_1.Display();
        var sale = new pos_1.Sale(display);
        sale.onBarcode("");
        expect(display.getText()).toBe("Scanning error: empty barcode");
    });
});
//# sourceMappingURL=pos.spec.js.map