import java.util.Map;

class Catalog {
    private final Map<String, String> pricesByBarcode;

    Catalog(Map<String, String> pricesByBarcode) {

        this.pricesByBarcode = pricesByBarcode;
    }

    public Map<String, String> getPricesByBarcode() {

        return pricesByBarcode;
    }

    public String findPrice(String barcode) {
        return pricesByBarcode.get(barcode);
    }
}
