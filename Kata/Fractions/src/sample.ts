export class Fraction {
    private _denominator: number;
    private _numerator: number;

    constructor(numerator, denominator?){
        this._numerator = numerator;
        this._denominator = denominator | 1;
    }


    plus(fraction: Fraction) {
        let numerator = this._numerator + fraction._numerator;
        return new Fraction(numerator, this._denominator);
    }

    intValue() {
        return this._numerator;
    }

    getNumerator() {
        return this._numerator;
    }

    getDenominator() {
        return this._denominator;
    }

    isEqual(object: Object) {
        if (object instanceof Fraction) {
            console.log(object);
            return this._numerator === object._numerator
                && this._denominator === object._denominator;
        }
        return false;
    }
}