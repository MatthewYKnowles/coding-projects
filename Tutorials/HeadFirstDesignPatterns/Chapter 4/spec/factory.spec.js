"use strict";
var factory_1 = require("../src/factory");
describe("Pizza Stores", function () {
    it("should return a NYStyle cheese pizza", function () {
        var nYPizzaStore = new factory_1.NYPizzaStore();
        var pizza = nYPizzaStore.orderPizza("cheese");
        expect(typeof pizza).toEqual(typeof new factory_1.NYStyleCheesePizza());
    });
    it("should return a NYStyle veggie pizza", function () {
        var nyPizzaStore = new factory_1.NYPizzaStore();
        var pizza = nyPizzaStore.orderPizza("veggie");
        expect(typeof pizza).toEqual(typeof new factory_1.NYStyleVeggiePizza());
    });
    it("should return a Chicago Style cheese pizza", function () {
        var chicagoPizzaStore = new factory_1.ChicagoPizzaStore();
        var pizza = chicagoPizzaStore.orderPizza("cheese");
        expect(typeof pizza).toEqual(typeof new factory_1.ChicagoStyleCheesePizza());
    });
    it("should return the order for a Chicago Style veggie pizza", function () {
        var chicagoPizzaStore = new factory_1.ChicagoPizzaStore();
        var pizza = chicagoPizzaStore.orderPizza("veggie");
        expect(typeof pizza).toEqual(typeof new factory_1.ChicagoStyleVeggiePizza());
    });
});
describe("Pizzas", function () {
    it("should bake a pizza", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        pizza.bake();
        expect(pizza.getOrder()).toEqual("Bake for 25 minutes at 350");
    });
    it("should cut a pizza", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        pizza.cut();
        expect(pizza.getOrder()).toEqual("Cutting the pizza into diagonal slices");
    });
    it("should box a pizza", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        pizza.box();
        expect(pizza.getOrder()).toEqual("Place pizza in official PizzaStore box");
    });
    it("should get the NY Style pizza's name", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        expect(pizza.getName()).toEqual("NY Style Sauce and Cheese Pizza");
    });
    it("should get the Chicago Style pizza's name", function () {
        var pizza = new factory_1.ChicagoStyleCheesePizza();
        expect(pizza.getName()).toEqual("Chicago Style Deep Dish Cheese Pizza");
    });
    it("should prepare the pizza", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        pizza.prepare();
        expect(pizza.getOrder()).toEqual("Preparing NY Style Sauce and Cheese Pizza\n" +
            "Tossing dough...\n" +
            "Adding sauce...\n" +
            "Adding toppings:\n" +
            "Grated Reggiano Cheese");
    });
    it("should get the NY Style pizza's name", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        pizza.prepare();
        expect(pizza.getOrder()).toEqual("Preparing NY Style Sauce and Cheese Pizza\n" +
            "Tossing dough...\n" +
            "Adding sauce...\n" +
            "Adding toppings:\n" +
            "Grated Reggiano Cheese");
    });
});
//# sourceMappingURL=factory.spec.js.map