export class CheckWrite {
    private _amount: number;
    private _integerToEnglishMap: any = {1: "one", 2: "two", 10: "ten", 20: "twenty", 21: "twenty one"};
    private _longForm: string = "";
    private _cents: string;

    constructor(amount: number) {
        this._amount = amount;
    }

    getLongFormAmount() {
        this._cents = this.calculateCents() === "0" ? "00" : this.calculateCents();
        if (this._amount >= 1.00) {
            this.addDollars(Math.floor(this._amount));
        }
        this.addCents();
        return this._longForm;
    }

    private addDollars(onesDigit: number) {
        this._longForm += this._integerToEnglishMap[onesDigit] + " and "
    }

    private addCents() {
        this._longForm += this._cents + "/100";
    }

    private calculateCents() {
        return (this._amount * 100 % 100).toString();
    }
}