import org.junit.Ignore;
import org.junit.Test;

import java.util.Collections;
import java.util.HashMap;

import static org.junit.Assert.assertEquals;

public class SellMultipleItemsTest {

    private Catalog emptyCatalog() {
        return new Catalog(Collections.emptyMap());
    }

    @Test
    public void zeroItems() {
        Display display = new Display();
        Sale sale = new Sale(display, null);

        sale.onTotal();
        assertEquals("no sale in progress.  Try scanning a product",
                display.getText());
    }

    @Test
    public void oneItemFound() {
        Catalog catalog = new Catalog(Collections.singletonMap("12345", 650));
        Display display = new Display();
        Sale sale = new Sale(display, catalog);

        sale.onBarcode("12345");
        sale.onTotal();

        assertEquals("Total: $6.50", display.getText());
    }

    @Test
    public void oneItemNotFound() {
        Catalog catalog = new Catalog(Collections.singletonMap("12345", 650));
        Display display = new Display();
        Sale sale = new Sale(display, catalog);

        sale.onBarcode("99999");
        sale.onTotal();

        assertEquals("no sale in progress.  Try scanning a product",
                display.getText());
    }

    @Test
    public void severlaItemsAllNotFound() {
        Display display = new Display();
        Sale sale = new Sale(display, emptyCatalog());

        sale.onBarcode("1");
        sale.onBarcode("2");
        sale.onBarcode("3");
        sale.onTotal();

        assertEquals("no sale in progress.  Try scanning a product",
                display.getText());
    }

    @Test
    public void severalItemsAllFound() {
        Catalog catalog = new Catalog(new HashMap<String, Integer>(){{
            put("1", 850);
            put("2", 1275);
            put("3", 330);
        }});
        Display display = new Display();
        Sale sale = new Sale(display, catalog);

        sale.onBarcode("1");
        sale.onBarcode("2");
        sale.onBarcode("3");
        sale.onTotal();

        assertEquals("Total: $24.55", display.getText());
    }

    @Test
    public void severalItemsSomeNotFound() throws Exception {
        Catalog catalog = new Catalog(new HashMap<String, Integer>(){{
            put("1", 1200);
            put("2", 500);
        }});
        Display display = new Display();
        Sale sale = new Sale(display, catalog);

        sale.onBarcode("1");
        sale.onBarcode("you don't know this product");
        sale.onBarcode("2");
        sale.onTotal();

        assertEquals("Total: $17.00", display.getText());
    }

    @Test
    public void severalItemsOfWhichOneIsEmpty() throws Exception {
        Catalog catalog = new Catalog(new HashMap<String, Integer>(){{
            put("1", 3100);
            put("2", 460);
        }});
        Display display = new Display();
        Sale sale = new Sale(display, catalog);

        sale.onBarcode("1");
        sale.onBarcode("");
        sale.onBarcode("2");
        sale.onTotal();

        assertEquals("Total: $35.60", display.getText());
    }
}
