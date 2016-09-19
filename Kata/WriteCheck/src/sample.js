"use strict";
var CheckWrite = (function () {
    function CheckWrite(amount) {
        this._integerToEnglishMap = { 1: "one", 2: "two", 10: "ten", 20: "twenty", 21: "twenty one" };
        this._longForm = "";
        this._amount = amount;
    }
    CheckWrite.prototype.getLongFormAmount = function () {
        this._cents = this.calculateCents() === "0" ? "00" : this.calculateCents();
        if (this._amount >= 1.00) {
            this.addDollars(Math.floor(this._amount));
        }
        this.addCents();
        return this._longForm;
    };
    CheckWrite.prototype.addDollars = function (onesDigit) {
        this._longForm += this._integerToEnglishMap[onesDigit] + " and ";
    };
    CheckWrite.prototype.addCents = function () {
        this._longForm += this._cents + "/100";
    };
    CheckWrite.prototype.calculateCents = function () {
        return (this._amount * 100 % 100).toString();
    };
    return CheckWrite;
}());
exports.CheckWrite = CheckWrite;
//# sourceMappingURL=sample.js.map