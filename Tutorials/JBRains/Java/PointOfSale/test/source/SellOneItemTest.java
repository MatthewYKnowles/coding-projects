import org.junit.Ignore;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SellOneItemTest {
    @Test
    public void productFound() throws Exception {
        Display display = new Display();

        Sale sale = new Sale(display);
        sale.onBarcode("12345");
        assertEquals("7.95", display.getText());
    }

    @Test
    public void anotherProductFound() throws Exception {
        Display display = new Display();

        Sale sale = new Sale(display);
        sale.onBarcode("23456");
        assertEquals("12.50", display.getText());
    }

    @Test
    public void productNotFound() throws Exception {
        Display display = new Display();

        Sale sale = new Sale(display);
        sale.onBarcode("99999");
        assertEquals("Product not found for 99999", display.getText());
    }
}
