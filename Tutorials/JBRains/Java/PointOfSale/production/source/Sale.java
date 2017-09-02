import java.util.ArrayList;
import java.util.Collection;

public class Sale {
    private final Catalog catalog;
    private Display display;
    private Collection<Integer> pendingPurchaseItemPrices = new ArrayList<Integer>();

    public Sale(Display display, Catalog catalog) {
        this.display = display;
        this.catalog = catalog;
    }

    public void onBarcode(String barcode) {
        if ("".equals(barcode)) {
            display.displayEmptyBarcodeMessage();
            return;
        }
        Integer priceInCents = catalog.findPrice(barcode);
        if (priceInCents == null) {
            display.displayProductNotFoundMessage(barcode);
        } else {
            pendingPurchaseItemPrices.add(priceInCents);
            display.displayPrice(priceInCents);
        }
    }

    public void onTotal() {
        if (pendingPurchaseItemPrices.isEmpty()) {
            display.displayNoSaleInProgressMessage();
        } else {
            display.displayPurchaseTotal(Display.formatMonetaryAmount(pendingPurchaseTotal()));
        }
    }

    private Integer pendingPurchaseTotal() {

        return computePurchaseTotal(pendingPurchaseItemPrices);
    }

    public static Integer computePurchaseTotal(Collection<Integer> pendingPurchaseItemPrices) {
        return pendingPurchaseItemPrices.iterator().next();
    }

}
