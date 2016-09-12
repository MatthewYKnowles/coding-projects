import {
    NYPizzaStore, NYStyleCheesePizza, NYStyleVeggiePizza, Pizza, ChicagoStyleCheesePizza,
    ChicagoPizzaStore, ChicagoStyleVeggiePizza
} from "../src/factory";

describe("Pizza Stores", ()=> {
    it("should return a NYStyle cheese pizza", ()=> {
        let nYPizzaStore: NYPizzaStore = new NYPizzaStore();
        let pizza: NYStyleCheesePizza = nYPizzaStore.orderPizza("cheese");
        expect(typeof pizza).toEqual(typeof new NYStyleCheesePizza())
    });
    it("should return a NYStyle veggie pizza", ()=> {
        let nyPizzaStore: NYPizzaStore = new NYPizzaStore();
        let pizza: NYStyleVeggiePizza = nyPizzaStore.orderPizza("veggie");
        expect(typeof pizza).toEqual(typeof new NYStyleVeggiePizza())
    });
    it("should return a Chicago Style cheese pizza", ()=> {
        let chicagoPizzaStore: ChicagoPizzaStore = new ChicagoPizzaStore();
        let pizza: ChicagoStyleCheesePizza = chicagoPizzaStore.orderPizza("cheese");
        expect(typeof pizza).toEqual(typeof new ChicagoStyleCheesePizza())
    });
    it("should return the order for a Chicago Style veggie pizza", ()=> {
        let chicagoPizzaStore: ChicagoPizzaStore = new ChicagoPizzaStore();
        let pizza: ChicagoStyleVeggiePizza = chicagoPizzaStore.orderPizza("veggie");
        expect(typeof pizza).toEqual(typeof new ChicagoStyleVeggiePizza())
    });
});
describe("Pizzas", ()=> {
    it("should bake a pizza", ()=> {
        let pizza: Pizza = new NYStyleCheesePizza();
        pizza.bake();
        expect(pizza.getOrder()).toEqual("Bake for 25 minutes at 350")
    });
    it("should cut a pizza", ()=> {
        let pizza: Pizza = new NYStyleCheesePizza();
        pizza.cut();
        expect(pizza.getOrder()).toEqual("Cutting the pizza into diagonal slices")
    });
    it("should box a pizza", ()=> {
        let pizza: Pizza = new NYStyleCheesePizza();
        pizza.box();
        expect(pizza.getOrder()).toEqual("Place pizza in official PizzaStore box")
    });
    it("should get the NY Style pizza's name", ()=> {
        let pizza: Pizza = new NYStyleCheesePizza();
        expect(pizza.getName()).toEqual("NY Style Sauce and Cheese Pizza");
    });
    it("should get the Chicago Style pizza's name", ()=> {
        let pizza: Pizza = new ChicagoStyleCheesePizza();
        expect(pizza.getName()).toEqual("Chicago Style Deep Dish Cheese Pizza");
    });
    it("should prepare the pizza", ()=> {
        let pizza: Pizza = new NYStyleCheesePizza();
        pizza.prepare();
        expect(pizza.getOrder()).toEqual("Preparing NY Style Sauce and Cheese Pizza\n" +
            "Tossing dough...\n" +
            "Adding sauce...\n" +
            "Adding toppings: Grated Reggiano Cheese");
    });
    it("should get the NY Style pizza's name", ()=> {
        let pizza: Pizza = new NYStyleCheesePizza();
        pizza.prepare();
        expect(pizza.getOrder()).toEqual("Preparing NY Style Sauce and Cheese Pizza\n" +
            "Tossing dough...\n" +
            "Adding sauce...\n" +
            "Adding toppings: Grated Reggiano Cheese");
    });
});