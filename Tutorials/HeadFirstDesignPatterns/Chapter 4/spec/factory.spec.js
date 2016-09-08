"use strict";
var factory_1 = require("../src/factory");
describe("Pizza Store", function () {
    it("should return a NYStyle cheese pizza", function () {
        var nYPizzaStore = new factory_1.NYPizzaStore();
        expect(nYPizzaStore.orderPizza("cheese")).toEqual(new factory_1.NYStyleCheesePizza());
    });
    it("should return a NYStyle veggie pizza", function () {
        var nyPizzaStore = new factory_1.NYPizzaStore();
        expect(nyPizzaStore.orderPizza("veggie")).toEqual(new factory_1.NYStyleVeggiePizza());
    });
    it("should return a Chicago Style veggie pizza", function () {
        var chicagoPizzaStore = new factory_1.ChicagoPizzaStore();
        expect(chicagoPizzaStore.orderPizza("veggie")).toEqual(new factory_1.ChicagoStyleVeggiePizza());
    });
});
describe("Pizza", function () {
    it("should bake a pizza", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        expect(pizza.bake()).toEqual("Bake for 25 minutes at 350");
    });
    it("should cut a pizza", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        expect(pizza.cut()).toEqual("Cutting the pizza into diagonal slices");
    });
    it("should box a pizza", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        expect(pizza.box()).toEqual("Place pizza in official PizzaStore box");
    });
    it("should get the NY Style pizza's name", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        expect(pizza.getName()).toEqual("NY Style Sauce and Cheese Pizza");
    });
    it("should get the Chicago Style pizza's name", function () {
        var pizza = new factory_1.ChicagoStyleCheesePizza();
        expect(pizza.getName()).toEqual("Chicago Style Deep Dish Cheese Pizza");
    });
});
//# sourceMappingURL=factory.spec.js.map