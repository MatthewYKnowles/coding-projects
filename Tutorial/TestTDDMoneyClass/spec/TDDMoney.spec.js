System.register(["../src/TDDMoney"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TDDMoney_1;
    return {
        setters:[
            function (TDDMoney_1_1) {
                TDDMoney_1 = TDDMoney_1_1;
            }],
        execute: function() {
            describe("Dollar", () => {
                it("testDollarMultiplication", () => {
                    let five = TDDMoney_1.Money.dollar(5);
                    expect(five.times(2).equals(TDDMoney_1.Money.dollar(10))).toBeTruthy();
                    expect(five.times(3).equals(TDDMoney_1.Money.dollar(15))).toBeTruthy();
                });
                it("testDollarEquality", () => {
                    expect(TDDMoney_1.Money.dollar(5).equals(TDDMoney_1.Money.dollar(5))).toBeTruthy();
                    expect(TDDMoney_1.Money.dollar(5).equals(TDDMoney_1.Money.dollar(6))).toBeFalsy();
                });
                it("testFrancDoesNotEqualDollars", () => {
                    expect(TDDMoney_1.Money.franc(5).equals(TDDMoney_1.Money.dollar(5))).toBeFalsy();
                });
                it("testDollarCurrency", () => {
                    expect(TDDMoney_1.Money.dollar(1).currency()).toBe("USD");
                });
                it("testFrancCurrency", () => {
                    expect(TDDMoney_1.Money.franc(1).currency()).toBe("CHF");
                });
                it("testSimpleAddition", () => {
                    let five = TDDMoney_1.Money.dollar(5);
                    let sum = five.plus(five);
                    let bank = new TDDMoney_1.Bank();
                    let reduced = bank.reduce(sum, "USD");
                    expect(reduced.equals(TDDMoney_1.Money.dollar(10))).toBeTruthy();
                });
                it("testPlusReturnsSum", () => {
                    let five = TDDMoney_1.Money.dollar(5);
                    let result = five.plus(five);
                    let sum = result;
                    expect(sum.augend.equals(five)).toBeTruthy();
                    expect(sum.addend.equals(five)).toBeTruthy();
                });
                it("testReduceSum", () => {
                    let sum = new TDDMoney_1.Sum(TDDMoney_1.Money.dollar(3), TDDMoney_1.Money.dollar(4));
                    let bank = new TDDMoney_1.Bank();
                    let result = bank.reduce(sum, "USD");
                    expect(result.equals(TDDMoney_1.Money.dollar(7))).toBeTruthy();
                });
                it("testReduceMoney", () => {
                    let bank = new TDDMoney_1.Bank();
                    let result = bank.reduce(TDDMoney_1.Money.dollar(1), "USD");
                    expect(result.equals(TDDMoney_1.Money.dollar(1))).toBeTruthy();
                });
                it("testReduceMoneyDifferentCurrency", () => {
                    let bank = new TDDMoney_1.Bank();
                    bank.addRate("CHF", "USD", 2);
                    let result = bank.reduce(TDDMoney_1.Money.franc(2), "USD");
                    expect(result.equals(TDDMoney_1.Money.dollar(1))).toBeTruthy();
                });
                it("testIdentityRate", () => {
                    expect(new TDDMoney_1.Bank().rate("USD", "USD")).toBe(1);
                });
                it("textMixedAddition", () => {
                    let fiveBucks = TDDMoney_1.Money.dollar(5);
                    let tenFrancs = TDDMoney_1.Money.franc(10);
                    let bank = new TDDMoney_1.Bank();
                    bank.addRate("CHF", "USD", 2);
                    let result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
                    expect(result.equals(TDDMoney_1.Money.dollar(10))).toBeTruthy();
                });
            });
        }
    }
});
//# sourceMappingURL=TDDMoney.spec.js.map