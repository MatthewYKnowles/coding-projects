export class Fraction {
    private _denominator: number;
    private _numerator: number;

    constructor(numerator, denominator?){
        this._numerator = numerator ;
        this._denominator = denominator || 1;
        this.reduceFraction();
    }

    private reduceFraction() {
        let lowestCommonDenominator = NumberTheory.gcd(this._numerator, this._denominator);
        this._numerator /= lowestCommonDenominator;
        this._denominator /= lowestCommonDenominator;
    }

    plus(fraction: Fraction) {
        if (this._denominator != fraction._denominator) {
            let newNumerator = this._numerator * fraction._denominator + this._denominator * fraction._numerator;
            var newDenominator = this._denominator * fraction._denominator;
            return new Fraction(newNumerator, newDenominator);
        }
        let numerator = this._numerator + fraction._numerator;
        return new Fraction(numerator, this._denominator);
    }

    isEqual(object: Object) {
        if (object instanceof Fraction) {
            return this._numerator === object._numerator
                && this._denominator === object._denominator;
        }
        return false;
    }
}

class NumberTheory {
    static gcd(a: number, b: number) {
        while (b != 0) {
            let t: number = b;
            b = a % t;
            a = t;
        }
        return Math.abs(a);
    }
}