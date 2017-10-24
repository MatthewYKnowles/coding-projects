public class Display {

    private String text;

    public static String formatMonetaryAmount(int priceInCents) {
        return String.format("$%,.2f", priceInCents / 100.0d);
    }

    public String getText() {
        return text;
    }

    void displayProductNotFoundMessage(String barcode) {
        this.text = "Product not found for " + barcode;
    }

    void displayEmptyBarcodeMessage() {
        this.text = "Scanning error: empty barcode";
    }

    public void displayNoSaleInProgressMessage() {
        this.text = "no sale in progress.  Try scanning a product";
    }

    public void displayPurchaseTotal(String price) {
        this.text = "Total: " + price;
    }

    public void displayPrice(Integer priceInCents) {
        this.text = formatMonetaryAmount(priceInCents);
    }
}
