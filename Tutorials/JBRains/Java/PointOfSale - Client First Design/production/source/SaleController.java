public class SaleController {
    private Display display;
    private Catalog catalog;

    public SaleController(Catalog catalog, Display display) {
        this.catalog = catalog;
        this.display = display;
    }

    public void onBarcode(String barcode) {
        if ("".equals(barcode)) {
            display.displayEmptyBarcodeMessage();
            return;
        }
        Price price = catalog.findPrice(barcode);
        if (price == null){
            display.displayProductNotFoundMessage(barcode);
        } else {
            display.displayPrice(price);
        }
    }
}
