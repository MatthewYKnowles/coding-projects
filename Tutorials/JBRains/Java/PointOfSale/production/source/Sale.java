public class Sale {
    private final Catalog catalog;
    private Display display;

    public Sale(Display display, Catalog catalog) {
        this.display = display;
        this.catalog = catalog;
    }

    public void onBarcode(String barcode) {
        if ("".equals(barcode)) {
            display.displayEmptyBarcodeMessage();
            return;
        }
        String priceAsText = catalog.findPrice(barcode);
        if (priceAsText == null) {
            display.displayProductNotFoundMessage(barcode);
        } else {
            display.displayPrice(priceAsText);
        }
    }

}
