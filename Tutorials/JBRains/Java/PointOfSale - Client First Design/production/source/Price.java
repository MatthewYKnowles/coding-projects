public class Price {

    private int centsValue;

    public Price(int centsValue) {
        this.centsValue = centsValue;
    }

    public static Price cents(int centsValue) {
        return new Price(centsValue);
    }

    public double dollarValue() {
        return centsValue / 100.0d;
    }
}
