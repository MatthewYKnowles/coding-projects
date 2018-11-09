import org.jmock.integration.junit4.JUnitRuleMockery;
import org.jmock.Expectations;
import org.junit.Rule;
import org.junit.Test;

import java.io.IOException;
import java.io.StringReader;

public class InterpretTextCommandsTest {

    @Rule
    public final JUnitRuleMockery context = new JUnitRuleMockery();

    @Test
    public void zero() throws IOException {
        BarcodeScannedListener barcodeScannedListener
                = context.mock(BarcodeScannedListener.class);
        context.checking(new Expectations() {{
            never(barcodeScannedListener);
        }});

        new EnglishLanguageConsoleDisplay.TextProcessorAndCommandInterpreter(barcodeScannedListener).process(
                new StringReader(""));
    }

    @Test
    public void oneBarcode() throws IOException {
        BarcodeScannedListener barcodeScannedListener
                = context.mock(BarcodeScannedListener.class);
        context.checking(new Expectations() {{
            oneOf(barcodeScannedListener).onBarcode("::barcode");
        }});

        new EnglishLanguageConsoleDisplay.TextProcessorAndCommandInterpreter(barcodeScannedListener).process(
                new StringReader("::barcode::\n"));
    }

    @Test
    public void trimsBarcode() throws IOException {
        BarcodeScannedListener barcodeScannedListener
                = context.mock(BarcodeScannedListener.class);
        context.checking(new Expectations() {{
            oneOf(barcodeScannedListener).onBarcode("::barcode");
        }});

        new EnglishLanguageConsoleDisplay.TextProcessorAndCommandInterpreter(barcodeScannedListener).process(
                new StringReader("\t\t    \t::barcode::\n     \t  \t"));
    }

    @Test
    public void severalBarcodes() throws IOException {
        BarcodeScannedListener barcodeScannedListener
                = context.mock(BarcodeScannedListener.class);
        context.checking(new Expectations() {{
            oneOf(barcodeScannedListener).onBarcode("::barcode 1::");
            oneOf(barcodeScannedListener).onBarcode("::barcode 2::");
            oneOf(barcodeScannedListener).onBarcode("::barcode 3::");
        }});

        new EnglishLanguageConsoleDisplay.TextProcessorAndCommandInterpreter(barcodeScannedListener).process(
                new StringReader("::barcode 1::\n::barcode 2::\n::barcode 3::\n"));
    }

    @Test
    public void severalBarcodesInterspersedWithEmpty() throws Exception {
        BarcodeScannedListener barcodeScannedListener
                = context.mock(BarcodeScannedListener.class);
        context.checking(new Expectations() {{
            oneOf(barcodeScannedListener).onBarcode("::barcode 1::");
            oneOf(barcodeScannedListener).onBarcode("::barcode 2::");
            oneOf(barcodeScannedListener).onBarcode("::barcode 3::");
        }});

        new EnglishLanguageConsoleDisplay.TextProcessorAndCommandInterpreter(barcodeScannedListener).process(
                new StringReader("\n::barcode 1::\n\t\n::barcode 2::\n   \n\n::barcode 3::\n\n"));
    }

    
    public interface BarcodeScannedListener {
        void onBarcode(String s);
    }
}
