import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

import static org.junit.Assert.assertEquals;

@RunWith(Parameterized.class)
public class FormatMonetaryAmountTest {
    private static int priceInCents;
    private final String expectedFormattedPrice;
    private PrintStream productionSystemOut;

    @Before
    public void rememberSystemOut() {
        productionSystemOut = System.out;
    }

    @After
    public void restoreSystemOut() {
        System.setOut(productionSystemOut);
    }

    public FormatMonetaryAmountTest(int priceInCents, String expectedFormattedPrice) {
        this.priceInCents = priceInCents;
        this.expectedFormattedPrice = expectedFormattedPrice;
    }

    @Parameterized.Parameters()
    public static Collection<Object[]> data() {
        return Arrays.asList(
                new Object[][]{
                        {789, "$7.89"},
                        {589, "$5.89"},
                        {520, "$5.20"},
                        {400, "$4.00"},
                        {0, "$0.00"},
                        {2, "$0.02"},
                        {37, "$0.37"},
                        {418776, "$4,187.76"},
                        {210832281, "$2,108,322.81"}
                });
    }

    @Test
    public void test() throws Exception {
        ByteArrayOutputStream canvas = new ByteArrayOutputStream();
        System.setOut(new PrintStream(canvas));
        new EnglishLanguageConsoleDisplay().displayPrice(Price.cents(priceInCents));
        Assert.assertEquals(
                Collections.singletonList(expectedFormattedPrice),
                TextUtilities.lines(canvas.toString()));
    }

}
