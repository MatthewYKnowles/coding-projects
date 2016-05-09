System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bank, Sum, Money;
    return {
        setters:[],
        execute: function() {
            class Bank {
                constructor() {
                    this._rates = {};
                }
                rate(from, to) {
                    if (from == to)
                        return 1;
                    return this._rates[from + to];
                }
                reduce(source, to) {
                    return source.reduce(this, to);
                }
                addRate(from, to, rate) {
                    this._rates[from + to] = rate;
                }
            }
            class Sum {
                constructor(augend, addend) {
                    this.augend = augend;
                    this.addend = addend;
                }
                reduce(bank, to) {
                    let amount = this.augend.reduce(bank, to)._amount + this.addend.reduce(bank, to)._amount;
                    return new Money(amount, to);
                }
                plus(addend) {
                    return null;
                }
                equals(object) {
                    return null;
                }
            }
            class Money {
                constructor(amount, currency) {
                    this._amount = amount;
                    this._currency = currency;
                }
                static dollar(amount) {
                    return new Money(amount, "USD");
                }
                static franc(amount) {
                    return new Money(amount, "CHF");
                }
                plus(addend) {
                    return new Sum(this, addend);
                }
                times(multiplier) {
                    return new Money(this._amount * multiplier, this._currency);
                }
                currency() {
                    return this._currency;
                }
                reduce(bank, to) {
                    let rate = bank.rate(this._currency, to);
                    return new Money(this._amount / rate, to);
                }
                equals(object) {
                    return this._amount == object._amount
                        && this.currency() == object.currency();
                }
            }
            exports_1("Money", Money);
            exports_1("Bank", Bank);
            exports_1("Sum", Sum);
        }
    }
});
//# sourceMappingURL=TDDMoney.js.map