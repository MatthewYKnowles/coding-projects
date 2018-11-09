import java.io.BufferedReader;
import java.io.IOException;
import java.io.StringReader;
import java.util.stream.Stream;

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

    public static class TextProcessorAndCommandInterpreter {

        private InterpretTextCommandsTest.BarcodeScannedListener barcodeScannedListener;

        public TextProcessorAndCommandInterpreter(InterpretTextCommandsTest.BarcodeScannedListener barcodeScannedListener) {
            this.barcodeScannedListener = barcodeScannedListener;
        }

        public void process(StringReader reader) throws IOException {
            interpretCommandsFromTextInput(reader);
        }

        private void interpretCommandsFromTextInput(StringReader reader) throws IOException {
            try (BufferedReader commandReader = new BufferedReader(reader)) {
                sanitiseThenInterpretLines(commandReader.lines());
            }
        }

        private void sanitiseThenInterpretLines(Stream<String> lines) {
                                    interpretLines(sanitiseLines(lines));
        }

        private void interpretLines(Stream<String> lines) {
            lines
                    .filter((line) -> !line.isEmpty())
                    .forEach((line) -> interpretLine(line));
        }

        private Stream<String> sanitiseLines(Stream<String> lines) {
            return lines.map((line) -> line.trim());
        }

        private void interpretLine(String line) {
            barcodeScannedListener.onBarcode(line);
        }
    }
}
