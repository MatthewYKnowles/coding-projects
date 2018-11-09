import java.io.StringReader;
import java.util.HashMap;

public class VirtualPointOfSaleTerminal {
    public static void main(String[] args){
        SaleController saleController = new SaleController(
                new InMemoryCatalog(
                        new HashMap<String, Price>(){{
                            put("12345", Price.cents(795));
                            put("23456", Price.cents(1250));
                        }}
                ),
                new EnglishLanguageConsoleDisplay()
        );

//        new EnglishLanguageConsoleDisplay.TextProcessorAndCommandInterpreter(saleController).process(new StringReader(
//                "12345\n23456\n99999\n\n"
//        ));
        saleController.onBarcode("12345");
        saleController.onBarcode("23456");
        saleController.onBarcode("99999");
        saleController.onBarcode("");
    }
}
