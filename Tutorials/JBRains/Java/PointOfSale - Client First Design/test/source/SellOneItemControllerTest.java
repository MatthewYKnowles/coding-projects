import org.jmock.Expectations;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.jmock.integration.junit4.JUnitRuleMockery;

public class SellOneItemControllerTest {
    @Rule
    public final JUnitRuleMockery context = new JUnitRuleMockery();
    private Catalog catalog;
    private Display display;
    private SaleController saleController;

    @Before
    public void setUp() throws Exception {
        catalog = context.mock(Catalog.class);
        display = context.mock(Display.class);
        saleController = new SaleController(catalog, display);
    }

    @Test
    public void productFound() throws Exception {
        Price irrelevantPrice = Price.cents(755);

        context.checking(new Expectations() {{
            allowing(catalog).findPrice(with("::product found::"));
            will(returnValue(irrelevantPrice));
           oneOf(display).displayPrice(with(irrelevantPrice));
        }});

        saleController.onBarcode("::product found::");
    }

    @Test
    public void productNotFound() throws Exception {
        context.checking(new Expectations() {{
            allowing(catalog).findPrice(with("::product not found::"));
            will(returnValue(null));

            oneOf(display).displayProductNotFoundMessage(with("::product not found::"));
        }});

        saleController.onBarcode("::product not found::");
    }

    @Test
    public void emptyBarcode() throws Exception {
        context.checking(new Expectations() {{
            oneOf(display).displayEmptyBarcodeMessage();
        }});
        saleController = new SaleController(null, display);
        saleController.onBarcode("");
    }
}
