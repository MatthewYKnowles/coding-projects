export abstract class Pizza {
    protected _name;

    bake() {
        return "Bake for 25 minutes at 350";
    }

    cut() {
        return "Cutting the pizza into diagonal slices";
    }

    box() {
        return "Place pizza in official PizzaStore box";
    }

    getName() {
        return this._name;
    }
}

export abstract class PizzaStore {
    abstract orderPizza(type: string): Pizza;
}

export class NYPizzaStore implements PizzaStore {

    orderPizza(type: string): Pizza {
        if (type === "cheese"){
            return new NYStyleCheesePizza();
        } else if (type === "veggie") {
            return new NYStyleVeggiePizza();
        }
    }
}

export class ChicagoPizzaStore implements PizzaStore {

    orderPizza(type: string): Pizza {
        if (type === "veggie"){
            return new ChicagoStyleVeggiePizza();
        }
    }

}

export class NYStyleCheesePizza extends Pizza {

    constructor() {
        this._name = "NY Style Sauce and Cheese Pizza";
    }
}

export class NYStyleVeggiePizza extends Pizza {

}

export class ChicagoStyleCheesePizza extends Pizza {

    constructor() {
        this._name = "Chicago Style Deep Dish Cheese Pizza";
    }
}

export class ChicagoStyleVeggiePizza extends Pizza {

}