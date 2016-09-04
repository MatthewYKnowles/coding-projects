import {Display, Sale} from "../src/pos";
describe("Sell One Item", ()=> {
    it("should find the product", ()=> {
        let display: Display = new Display();
        let sale: Sale = new Sale(display);
        sale.onBarcode("12345");
        expect(display.getText()).toBe("$7.95");
    });
    it("should find another product", ()=> {
        let display: Display = new Display();
        let sale: Sale = new Sale(display);
        sale.onBarcode("23456");
        expect(display.getText()).toBe("$12.50");
    });
    it("should show product not found", ()=> {
        let display: Display = new Display();
        let sale: Sale = new Sale(display);
        sale.onBarcode("99999");
        expect(display.getText()).toBe("Product not found for 99999");
    });
    it("should show empty barcode when no barcode passed in", ()=> {
        let display: Display = new Display();
        let sale: Sale = new Sale(display);
        sale.onBarcode("");
        expect(display.getText()).toBe("Scanning error: empty barcode");
    });
});