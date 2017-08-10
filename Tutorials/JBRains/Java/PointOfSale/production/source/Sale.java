public class Sale {
    private Display display;

    public Sale(Display display) {
        this.display = display;
    }
    public void onBarcode(String barcode) {
        if("12345".equals(barcode)){
            display.setText("7.95");
        }
        else if("23456".equals(barcode)){
            display.setText("12.50");
        }
        else {
            display.setText("Product not found for " + barcode);
        }
    }
}
