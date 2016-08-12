export class Fraction {
    private integerValue;
    constructor(integerValue) {
        this.integerValue = integerValue;
    }

    plus(fraction: Fraction) {
        return new Fraction(this.integerValue + fraction.integerValue);
    }

    intValue() {
        return this.integerValue;
    }
}