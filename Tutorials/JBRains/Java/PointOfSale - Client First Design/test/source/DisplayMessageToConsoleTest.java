import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import javax.management.remote.rmi.RMIConnectionImpl;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.Arrays;
import java.util.Collections;

public class DisplayMessageToConsoleTest {
    private PrintStream productionSystemOut;

    @Before
    public void rememberSystemOut() {
        productionSystemOut = System.out;
    }

    @After
    public void restoreSystemOut() {
        System.setOut(productionSystemOut);
    }

    @Test
    public void productNotFoundMessage() {

        ByteArrayOutputStream  canvas = new ByteArrayOutputStream();
        System.setOut(new PrintStream(canvas));
        new ConsoleDisplay().displayProductNotFoundMessage("91837248");
        Assert.assertEquals(
                Collections.singletonList("Product not found for 91837248"),
                TextUtilities.lines(canvas.toString()));
    }

    @Test
    public void emptyBarcodeMessage() {

        ByteArrayOutputStream  canvas = new ByteArrayOutputStream();
        System.setOut(new PrintStream(canvas));
        new ConsoleDisplay().displayEmptyBarcodeMessage();
        Assert.assertEquals(
                Collections.singletonList("Scanning error: empty barcode"),
                TextUtilities.lines(canvas.toString()));
    }

    public static class ConsoleDisplay {
        public void displayProductNotFoundMessage(String barcodeNotFound) {
            System.out.println(String.format("Product not found for %s", barcodeNotFound));
        }

        public void displayEmptyBarcodeMessage() {
            System.out.println("Scanning error: empty barcode");

        }
    }
}
