import {Display, Sale} from "../src/pos";
describe("Sell One Item", ()=> {
    it("should find the product", ()=> {
        let display: Display = new Display();
        let sale: Sale = new Sale(display);
        sale.onBarcode("12345");
        expect(display.getText()).toBe("$7.95");
    });
    xit("should find another product", ()=> {
        let display: Display = new Display();
        let sale: Sale = new Sale(display);
        sale.onBarcode("23456");
        expect(display.getText()).toBe("$12.50");
    });
});