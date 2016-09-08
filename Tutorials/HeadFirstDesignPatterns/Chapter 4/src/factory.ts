export abstract class Pizza {

    bake() {
        return "Bake for 25 minutes at 350";
    }

    cut() {
        return "Cutting the pizza into diagonal slices";
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

export class NYStyleCheesePizza extends Pizza {

}

export class NYStyleVeggiePizza extends Pizza {
}
