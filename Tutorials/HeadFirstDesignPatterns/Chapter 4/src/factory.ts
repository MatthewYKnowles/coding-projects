export class SimplePizzaFactory {
    makePizza(pizzaType: string) {
        let pizza: Pizza = null;
        if (pizzaType === "cheese"){
            pizza = new CheesePizza();
        }
        else if (pizzaType === "pepperoni") {
            pizza = new PepperoniPizza();
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