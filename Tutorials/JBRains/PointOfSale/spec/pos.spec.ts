import {Display, Sale} from "../src/pos";
describe("Sell One Item", ()=> {
    let display: Display;
    let pricesByBarcode = {"12345": "$7.95", "23456": "$12.50"};
    let sale: Sale;
    beforeEach(()=> {
        display = new Display();
        sale = new Sale(display, pricesByBarcode);
    });
    it("should find the product", ()=> {
        sale.onBarcode("12345");
        expect(display.getText()).toBe("$7.95");
    });
    it("should find another product", ()=> {
        sale.onBarcode("23456");
        expect(display.getText()).toBe("$12.50");
    });
    it("should show product not found", ()=> {
        sale.onBarcode("99999");
        expect(display.getText()).toBe("Product not found for 99999");
    });
    it("should show empty barcode when no barcode passed in", ()=> {
        let sale: Sale = new Sale(display, null);
        sale.onBarcode("");
        expect(display.getText()).toBe("Scanning error: empty barcode");
    });
});