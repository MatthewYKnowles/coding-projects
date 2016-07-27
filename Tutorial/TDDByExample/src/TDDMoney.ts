interface IExpression {
    reduce(bank: Bank, to: string): Money;
    plus(addend: IExpression);
    equals(object: IExpression);
}

class Bank {
    private _rates = {};

    rate(from: string, to: string): number {
        if (from == to) return 1;
        return this._rates[from + to];
    }
    reduce(source: IExpression, to: string): Money {
       return source.reduce(this, to);
    }

    addRate(from: string, to: string, rate: number) {
        this._rates[from + to] = rate;
    }
}

class Sum implements IExpression{
    public augend : IExpression;
    public addend : IExpression;
    public constructor(augend: IExpression, addend: IExpression) {
        this.augend = augend;
        this.addend = addend;
    }
    reduce(bank: Bank, to: string): Money {
        let amount: number = this.augend.reduce(bank, to)._amount + this.addend.reduce(bank, to)._amount;
        return new Money(amount, to);
    }
    plus(addend: IExpression) {
        return null;
    }
    equals(object: IExpression) {
        return null;
    }
}

class Money implements IExpression {
    public _amount: number;
    public _currency: string;
    
    public constructor(amount: number, currency: string){
        this._amount = amount;
        this._currency = currency;
    }

    static dollar(amount: number): Money {
        return new Money(amount, "USD");
    }
    
    static franc(amount: number): Money {
        return new Money(amount, "CHF");
    }

    plus (addend: IExpression): IExpression {
        return new Sum(this, addend);
    }
    times(multiplier: number): IExpression{
        return new Money(this._amount * multiplier, this._currency);
    }

    currency(): string {
        return this._currency;
    }
    reduce(bank: Bank, to: string): Money {
        let rate: number = bank.rate(this._currency, to);
        return new Money(this._amount /rate, to);
    }

    equals(object: Money): boolean {
        return this._amount == object._amount
            && this.currency() == object.currency();
    }
}

export {Money, IExpression, Bank, Sum};