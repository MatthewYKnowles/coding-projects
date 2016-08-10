export class Fraction {
    private integerValue;
    constructor(integerValue) {
        this.integerValue = integerValue;
    }

    plus(fraction: Fraction) {
        return this;
    }

    intValue() {
        return 0;
    }
}