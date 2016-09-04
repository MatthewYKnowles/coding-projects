import {Display, Sale} from "../src/pos";
describe("Sell One Item", ()=> {
    it("should find the product", ()=> {
        let display: Display = new Display();
        let sale: Sale = new Sale();
        sale.onBarcode("12345");
        expect(display.getText()).toBe("$7.95");
    });
});