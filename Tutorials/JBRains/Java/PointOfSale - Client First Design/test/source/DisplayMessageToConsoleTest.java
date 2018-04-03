import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

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
        new EnglishLanguageConsoleDisplay().displayProductNotFoundMessage("91837248");
        Assert.assertEquals(
                Collections.singletonList("Product not found for 91837248"),
                TextUtilities.lines(canvas.toString()));
    }

    @Test
    public void emptyBarcodeMessage() {
        ByteArrayOutputStream  canvas = new ByteArrayOutputStream();
        System.setOut(new PrintStream(canvas));
        new EnglishLanguageConsoleDisplay().displayEmptyBarcodeMessage();
        Assert.assertEquals(
                Collections.singletonList("Scanning error: empty barcode"),
                TextUtilities.lines(canvas.toString()));
    }

    @Test
    public void multipleMessages() {
        ByteArrayOutputStream  canvas = new ByteArrayOutputStream();
        System.setOut(new PrintStream(canvas));
        EnglishLanguageConsoleDisplay englishLanguageConsoleDisplay = new EnglishLanguageConsoleDisplay();
        englishLanguageConsoleDisplay.displayProductNotFoundMessage("91837248");
        englishLanguageConsoleDisplay.displayEmptyBarcodeMessage();
        englishLanguageConsoleDisplay.displayProductNotFoundMessage("32871");
        englishLanguageConsoleDisplay.displayEmptyBarcodeMessage();


        Assert.assertEquals(
                Arrays.asList(
                        "Product not found for 91837248",
                        "Scanning error: empty barcode",
                        "Product not found for 32871",
                        "Scanning error: empty barcode"),
                TextUtilities.lines(canvas.toString()));
    }

}
