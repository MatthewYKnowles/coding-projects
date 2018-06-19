import org.jmock.integration.junit4.JUnitRuleMockery;
import org.jmock.Expectations;
import org.junit.Rule;
import org.junit.Test;

import java.io.BufferedReader;
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

        new TextCommandInterpreter(barcodeScannedListener).process(
                new StringReader(""));
    }

    @Test
    public void oneBarcode() throws IOException {
        BarcodeScannedListener barcodeScannedListener
                = context.mock(BarcodeScannedListener.class);
        context.checking(new Expectations() {{
            oneOf(barcodeScannedListener).onBarcode("::barcode");
        }});

        new TextCommandInterpreter(barcodeScannedListener).process(
                new StringReader("::barcode::\n"));
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

        new TextCommandInterpreter(barcodeScannedListener).process(
                new StringReader("::barcode 1::\n::barcode 2::\n::barcode 3::\n"));
    }
    
    public interface BarcodeScannedListener {
        void onBarcode(String s);
    }
    public static class TextCommandInterpreter {

        private BarcodeScannedListener barcodeScannedListener;

        public TextCommandInterpreter(BarcodeScannedListener barcodeScannedListener) {
            this.barcodeScannedListener = barcodeScannedListener;
        }

        public void process(StringReader reader) throws IOException {
            interpretCommandsFromTextInput(reader);
        }

        private void interpretCommandsFromTextInput(StringReader reader) throws IOException {
            try (BufferedReader commandReader = new BufferedReader(reader)) {
                commandReader.lines().forEach(
                        (line) -> interpretTextCommand(line)
                );
            }
        }

        private void interpretTextCommand(String line) {
            barcodeScannedListener.onBarcode(line);
        }
    }
}
