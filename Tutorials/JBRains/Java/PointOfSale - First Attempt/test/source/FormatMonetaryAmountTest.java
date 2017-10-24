import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.util.Arrays;
import java.util.Collection;

import static org.junit.Assert.assertEquals;

@RunWith(Parameterized.class)
public class FormatMonetaryAmountTest {
    private final int priceInCents;
    private final String expectedFormattedPrice;

    public FormatMonetaryAmountTest(int priceInCents, String expectedFormattedPrice) {
        this.priceInCents = priceInCents;
        this.expectedFormattedPrice = expectedFormattedPrice;
    }

    @Parameterized.Parameters(name = "Monetary amount {0} formats to {1}")
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
        assertEquals(expectedFormattedPrice, Display.formatMonetaryAmount(priceInCents));
    }

}
