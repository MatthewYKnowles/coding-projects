export abstract class PizzaStore {

    constructor() {
    }
    abstract orderPizza(type: string): Pizza;
}

export abstract class Pizza {

    bake() {
        return "Bake for 25 minutes at 350";
    }
}
export class NYPizzaStore implements PizzaStore {

    constructor() {
    }

    orderPizza(type: string): Pizza {
        if (type === "cheese"){
            return new NYStyleCheesePizza();
        } else if (type === "veggie") {
            return new NYStyleVeggiePizza();
        }
    }
}

export class NYStyleCheesePizza extends Pizza {

}

export class NYStyleVeggiePizza extends Pizza {
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

export class CheesePizza implements Pizza {
    bake(): string {
        return undefined;
    }
}

export class PepperoniPizza implements Pizza {
    bake(): string {
        return undefined;
    }

}

export class ClamPizza implements Pizza {
    bake(): string {
        return undefined;
    }

}

export class VeggiePizza implements Pizza {
    bake(): string {
        return undefined;
    }

}