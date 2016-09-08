export abstract class PizzaStore {
    private _factory: SimplePizzaFactory;

    constructor(factory: SimplePizzaFactory) {
        this._factory = factory;

    }
    orderPizza(type: string) {
        let pizza: Pizza;
        pizza = this._factory.createPizza(type);
        return pizza;
    }
}

export class NYPizzaStore implements PizzaStore {
    _factory: SimplePizzaFactory;

    constructor(type: string) {

    }

    orderPizza(type: string): Pizza {
        return new NYStyleCheesePizza();
    }
}

export class NYStyleCheesePizza implements Pizza {

}


export class SimplePizzaFactory {

    createPizza(type: string) {
        let pizza: Pizza = null;
        if (type === "cheese"){
            pizza = new CheesePizza();
        } else if (type === "pepperoni") {
            pizza = new PepperoniPizza();
        } else if (type === "clam") {
            pizza = new ClamPizza();
        } else if (type === "veggie") {
            pizza = new VeggiePizza();
        }
        return pizza;
    }
}

interface Pizza {

}
export class CheesePizza implements Pizza {

}

export class PepperoniPizza implements Pizza {

}

export class ClamPizza implements Pizza {

}

export class VeggiePizza implements Pizza {

}