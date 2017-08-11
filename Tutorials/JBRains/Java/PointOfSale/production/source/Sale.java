import java.util.HashMap;
import java.util.Map;

public class Sale {
    private Display display;

    public Sale(Display display) {
        this.display = display;
    }
    public void onBarcode(String barcode) {
        if ("".equals(barcode)) {
            display.setText("Scanning error: empty barcode");
        }
        else {
            Map<String, String> pricesByBarcode = new HashMap<String, String>() {{
                put("12345", "7.95");
                put("23456", "12.50");
            }};
            if (pricesByBarcode.containsKey(barcode)) {
                display.setText(pricesByBarcode.get(barcode));
            } else {
                display.setText("Product not found for " + barcode);
            }
        }
    }
}
