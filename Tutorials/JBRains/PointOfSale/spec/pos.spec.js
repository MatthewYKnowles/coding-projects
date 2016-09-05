"use strict";
var pos_1 = require("../src/pos");
describe("Sell One Item", function () {
    var display;
    var pricesByBarcode = { "12345": "$7.95", "23456": "$12.50" };
    var sale;
    beforeEach(function () {
        display = new pos_1.Display();
        sale = new pos_1.Sale(display, new pos_1.Catalog(pricesByBarcode));
    });
    it("should find the product", function () {
        sale.onBarcode("12345");
        expect(display.getText()).toBe("$7.95");
    });
    it("should find another product", function () {
        sale.onBarcode("23456");
        expect(display.getText()).toBe("$12.50");
    });
    it("should show product not found", function () {
        sale.onBarcode("99999");
        expect(display.getText()).toBe("Product not found for 99999");
    });
    it("should show empty barcode when no barcode passed in", function () {
        sale.onBarcode("");
        expect(display.getText()).toBe("Scanning error: empty barcode");
    });
});
//# sourceMappingURL=pos.spec.js.map