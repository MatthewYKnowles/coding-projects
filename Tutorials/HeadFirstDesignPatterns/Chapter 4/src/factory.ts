export abstract class Pizza {
    protected _name: string;
    protected _order: string;
    protected _toppings: string[];

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

    prepare() {
        this._order += "Preparing " + this._name + "\n";
        this._order += "Tossing dough...\n";
        this._order += "Adding sauce...\n";
        this._order += "Adding toppings: " + this._toppings[0];
    }
}

export abstract class PizzaStore {
    abstract orderPizza(type: string): Pizza;
}

export class NYPizzaStore implements PizzaStore {

    orderPizza(type: string): Pizza {
        let pizza: Pizza = null;
        if (type === "cheese"){pizza = new NYStyleCheesePizza();}
        else if (type === "veggie") {pizza = new NYStyleVeggiePizza();}
        pizza.bake();
        return pizza
    }
}

export class ChicagoPizzaStore implements PizzaStore {

    orderPizza(type: string): Pizza {
        let pizza: Pizza = null;
        if (type === "cheese"){pizza = new ChicagoStyleCheesePizza();}
        else if (type === "veggie"){pizza = new ChicagoStyleVeggiePizza();}
        pizza.bake();
        return pizza

    }

}

export class NYStyleCheesePizza extends Pizza {

    constructor() {
        super();
        this._name = "NY Style Sauce and Cheese Pizza";
        this._toppings = ["Grated Reggiano Cheese"];
    }
}

export class NYStyleVeggiePizza extends Pizza {

}

export class ChicagoStyleCheesePizza extends Pizza {

    constructor() {
        super();
        this._name = "Chicago Style Deep Dish Cheese Pizza";
        this._toppings = ["Shredded Mozzarella Cheese"];
    }
}

export class ChicagoStyleVeggiePizza extends Pizza {

}