class EnglishLanguageConsoleDisplay implements Display {

    private final String PRICE_INT_DOLLARS_MESSAGE_FORMAT = "$%,.2f";
    private String PRODUCT_NOTFOUND_MESSAGE_FORMAT = "Product not found for %s";
    private String SCANNING_ERROR_EMPTY_BARCODE_MESSAGE_FORMAT = "Scanning error: empty barcode";

    public void displayPrice(Price price) {
        displayMessage(PRICE_INT_DOLLARS_MESSAGE_FORMAT, price.dollarValue());
    }

    public void displayProductNotFoundMessage(String barcode) {
        displayMessage(PRODUCT_NOTFOUND_MESSAGE_FORMAT, barcode);
    }

    public void displayEmptyBarcodeMessage() {
        displayMessage(SCANNING_ERROR_EMPTY_BARCODE_MESSAGE_FORMAT);
    }

    private void displayMessage(String messageTemplate, Object... placeholderValues) {
        render(String.format(messageTemplate, placeholderValues));
    }

    private void render(String text) {
        System.out.println(text);
    }
}
