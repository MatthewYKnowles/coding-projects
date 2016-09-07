export class PizzaStore {
    private _factory: SimplePizzaFactory;

    constructor(factory: SimplePizzaFactory) {
        this._factory = factory;

    }
    orderPizza(type: string) {
        return new CheesePizza();
    }
}


export class SimplePizzaFactory {

    makePizza(type: string) {
        let pizza: Pizza = null;
        if (type === "cheese"){
            pizza = new CheesePizza();
        }
        else if (type === "pepperoni") {
            pizza = new PepperoniPizza();
        }
        else if (type === "clam") {
            pizza = new ClamPizza();
        }
        else if (type === "veggie") {
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