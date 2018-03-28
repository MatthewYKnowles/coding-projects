import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.Arrays;
import java.util.Collections;

public class LearnHowToHijackSystemOutTest {

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
    public void singleLineOfText() {
        ByteArrayOutputStream canvas = new ByteArrayOutputStream();
        System.setOut((new PrintStream(canvas)));
        System.out.println("Hello, world.");
        Assert.assertEquals(Collections.singletonList("Hello, world."),
                TextUtilities.lines(canvas.toString()));
    }

    @Test
    public void severalLinesOfText() throws Exception {
        ByteArrayOutputStream canvas = new ByteArrayOutputStream();
        System.setOut(new PrintStream(canvas));
        for (int i = 1; i <= 5; i++) {
            System.out.println(("Line " +  i));
        }
        Assert.assertEquals(
                Arrays.asList("Line 1", "Line 2", "Line 3", "Line 4", "Line 5"),
                TextUtilities.lines(canvas.toString()));
    }

}
