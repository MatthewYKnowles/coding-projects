import java.util.HashMap;
import java.util.Map;

class Catalog {
    private Map<String, String> pricesAsStringByBarcode;
    private Map<String, Integer> pricesAsNumberByBarcode;


    public Catalog(Map<String, String> pricesAsStringByBarcode, Map<String, Integer> pricesAsNumberByBarcode) {
        this.pricesAsStringByBarcode = pricesAsStringByBarcode;
        this.pricesAsNumberByBarcode = pricesAsNumberByBarcode;
    }

    public Map<String, String> getPricesByBarcode() {

        return pricesAsStringByBarcode;
    }

    public String findThenFormatPrice(String barcode) {
        return pricesAsStringByBarcode.get(barcode);
    }
}
