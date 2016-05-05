interface Expression {
    reduce(bank: Bank, to: string): Money;
}

class Bank {

    rate(from: string, to: string): number {
        let rate: number = 1;
        if (from == "CHF" && to == "USD"){rate = 2;}
        return rate;
    }
    reduce(source: Expression, to: string): Money {
       return source.reduce(this, to);
    }

    addRate(s:string, s2:string, number:number) {
            
    }
}

class Sum implements Expression{
    public augend : Money;
    public addend : Money;
    public constructor(augend: Money, addend: Money) {
        this.augend = augend;
        this.addend = addend;
    }
    reduce(bank: Bank, to: string): Money {
        let amount: number = this.augend._amount + this.addend._amount;
        return new Money(amount, to);
    }
}

class Money implements Expression {
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

    plus (addend: Money): Sum {
        return new Sum(this, addend);
    }
    times(multiplier: number): Money{
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

export {Money, Expression, Bank, Sum};