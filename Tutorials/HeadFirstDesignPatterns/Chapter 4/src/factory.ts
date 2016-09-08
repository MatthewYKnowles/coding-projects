export abstract class Pizza {
    protected _name: string;
    protected _order: string;

    constructor() {
        this._order = "";
    }
    bake() {
        this._order += "Bake for 25 minutes at 350";
    }

    cut() {
        this._order += "Cutting the pizza into diagonal slices";
    }

    box() {
        this._order += "Place pizza in official PizzaStore box";
    }

    getName() {
        return this._name;
    }
    getOrder(): string {
        return this._order;
    }
}

export abstract class PizzaStore {
    abstract orderPizza(type: string): Pizza;
}

export class NYPizzaStore implements PizzaStore {

    orderPizza(type: string): Pizza {
        let pizza: Pizza = null;
        if (type === "cheese"){
            pizza = new NYStyleCheesePizza();
        } else if (type === "veggie") {
            pizza = new NYStyleVeggiePizza();
        }
        return pizza
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
        super();
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