export class Fraction {
    private integerValue;
    constructor(integerValue) {
        this.integerValue = integerValue;
    }

    plus(fraction: Fraction) {
        if (fraction.integerValue > 0) {
            return fraction;
        }
        return this;
    }

    intValue() {
        return this.integerValue;
    }
}