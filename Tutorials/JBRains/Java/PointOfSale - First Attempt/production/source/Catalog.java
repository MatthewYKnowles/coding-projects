import java.util.HashMap;
import java.util.Map;

class Catalog {
    private Map<String, Integer> pricesAsNumberByBarcode;


    public Catalog(Map<String, Integer> pricesAsNumberByBarcode) {
        this.pricesAsNumberByBarcode = pricesAsNumberByBarcode;
    }

    public Integer findPrice(String barcode) {
        return pricesAsNumberByBarcode.get(barcode);
    }
}
