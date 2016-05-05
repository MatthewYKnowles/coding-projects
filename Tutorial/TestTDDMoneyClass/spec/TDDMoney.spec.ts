import {Money, Expression, Bank, Sum} from "../src/TDDMoney";

describe ("Dollar", ()=>{
    it("testDollarMultiplication", ()=>{
        let five: Money = Money.dollar(5);
        expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();
        expect(five.times(3).equals(Money.dollar(15))).toBeTruthy();
    });
    it("testDollarEquality", ()=> {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    });
    it("testFrancDoesNotEqualDollars", ()=> {
        expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
    });
    it("testDollarCurrency", ()=> {
        expect(Money.dollar(1).currency()).toBe("USD");
    });
    it("testFrancCurrency", ()=> {
        expect(Money.franc(1).currency()).toBe("CHF");
    });
    it("testSimpleAddition", ()=> {
        let five: Money = Money.dollar(5);
        let sum: Expression = five.plus(five);
        let bank: Bank = new Bank();
        let reduced: Money = bank.reduce(sum, "USD");
        expect(reduced.equals(Money.dollar(10))).toBeTruthy();
    });
    it("testPlusReturnsSum", ()=> {
        let five: Money = Money.dollar(5);
        let result : Expression = five.plus(five);
        let sum : Sum = <Sum> result;
        expect(sum.augend.equals(five)).toBeTruthy();
        expect(sum.addend.equals(five)).toBeTruthy();
    });
    it("testReduceSum", ()=> {
        let sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
        let bank: Bank = new Bank();
        let result: Money = bank.reduce(sum, "USD");
        expect(result.equals(Money.dollar(7))).toBeTruthy();
    });
    it("testReduceMoney", ()=> {
        let bank : Bank = new Bank();
        let result : Money = bank.reduce(Money.dollar(1), "USD");
        expect(result.equals(Money.dollar(1))).toBeTruthy();
    });
    it("testReduceMoneyDifferentCurrency", ()=> {
        let bank: Bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        let result: Money = bank.reduce(Money.franc(2), "USD");
       expect(result.equals(Money.dollar(1))).toBeTruthy()
    })
});