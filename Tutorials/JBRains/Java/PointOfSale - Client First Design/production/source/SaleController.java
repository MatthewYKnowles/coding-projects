public class SaleController {
    private Display display;
    private Catalog catalog;

    public SaleController(Display display, Catalog catalog) {
        this.display = display;
        this.catalog = catalog;
    }

    public void onBarcode(String barcode) {
        Price price = catalog.findPrice(barcode);
        if (price == null){
            display.displayProductNotFoundMessage(barcode);
        } else {
            display.displayPrice(price);
        }
    }
}
