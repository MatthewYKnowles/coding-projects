public class Display {

    private String text;

    public String getText() {

        return text;
    }

    void displayPrice(String priceAsText) {
        this.text = priceAsText;
    }

    void displayProductNotFoundMessage(String barcode) {
        this.text = "Product not found for " + barcode;
    }

    void displayEmptyBarcodeMessage() {
        this.text = "Scanning error: empty barcode";
    }
}
