import org.jmock.Expectations;
import org.junit.Rule;
import org.junit.Test;
import org.jmock.integration.junit4.JUnitRuleMockery;

public class SellOneItemControllerTest {
    @Rule
    public final JUnitRuleMockery context = new JUnitRuleMockery();

    @Test
    public void productFound() throws Exception {
        Catalog catalog = context.mock(Catalog.class);
        Display display = context.mock(Display.class);
        Price irrelevantPrice = Price.cents(755);

        context.checking(new Expectations() {{
            allowing(catalog).findPrice(with("12345"));
            will(returnValue(irrelevantPrice));
           oneOf(display).displayPrice(with(irrelevantPrice));
        }});

        SaleController saleController = new SaleController(display, catalog);
        saleController.onBarcode("12345");
    }
}
