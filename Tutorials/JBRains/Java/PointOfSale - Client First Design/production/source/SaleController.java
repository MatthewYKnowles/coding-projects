public class SaleController {
    private Display display;
    private Catalog catalog;

    public SaleController(Display display, Catalog catalog) {
        this.display = display;
        this.catalog = catalog;
    }

    public void onBarcode(String barcode) {
        display.displayPrice(catalog.findPrice(barcode));
    }
}
