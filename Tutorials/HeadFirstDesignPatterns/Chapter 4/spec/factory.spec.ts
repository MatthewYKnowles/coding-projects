import {
    NYPizzaStore, NYStyleCheesePizza, NYStyleVeggiePizza, Pizza, ChicagoStyleCheesePizza,
    ChicagoPizzaStore, ChicagoStyleVeggiePizza
} from "../src/factory";

describe("Pizza Store", ()=> {
    it("should return a NYStyle cheese pizza", ()=> {
        let nYPizzaStore: NYPizzaStore = new NYPizzaStore();
        expect(nYPizzaStore.orderPizza("cheese")).toEqual(new NYStyleCheesePizza())
    });
    it("should return a NYStyle veggie pizza", ()=> {
        let nyPizzaStore: NYPizzaStore = new NYPizzaStore();
        expect(nyPizzaStore.orderPizza("veggie")).toEqual(new NYStyleVeggiePizza())
    });
    it("should return a Chicago Style veggie pizza", ()=> {
        let chicagoPizzaStore: ChicagoPizzaStore = new ChicagoPizzaStore();
        expect(chicagoPizzaStore.orderPizza("veggie")).toEqual(new ChicagoStyleVeggiePizza())
    });
});
describe("Pizza", ()=> {
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
});