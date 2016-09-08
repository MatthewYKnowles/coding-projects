"use strict";
var factory_1 = require("../src/factory");
describe("Simple Pizza Factory", function () {
    var simplePizzaFactory;
    beforeEach(function () {
        simplePizzaFactory = new factory_1.SimplePizzaFactory();
    });
    it("should return a new cheese pizza", function () {
        expect(simplePizzaFactory.createPizza("cheese")).toEqual(new factory_1.CheesePizza());
    });
    it("should return a new cheese pizza", function () {
        expect(simplePizzaFactory.createPizza("pepperoni")).toEqual(new factory_1.PepperoniPizza());
    });
    it("should return a new clam pizza", function () {
        expect(simplePizzaFactory.createPizza("clam")).toEqual(new factory_1.ClamPizza());
    });
    it("should return a new veggie pizza", function () {
        expect(simplePizzaFactory.createPizza("veggie")).toEqual(new factory_1.VeggiePizza());
    });
});
describe("Pizza Store", function () {
    it("should return a NYStyle cheese pizza", function () {
        var nYPizzaStore = new factory_1.NYPizzaStore();
        expect(nYPizzaStore.orderPizza("cheese")).toEqual(new factory_1.NYStyleCheesePizza());
    });
    it("should return a NYStyle veggie pizza", function () {
        var nyPizzaStore = new factory_1.NYPizzaStore();
        expect(nyPizzaStore.orderPizza("veggie")).toEqual(new factory_1.NYStyleVeggiePizza());
    });
});
describe("Pizza", function () {
    it("should bake a pizza", function () {
        var pizza = new factory_1.NYStyleCheesePizza();
        expect(pizza.bake()).toEqual("Bake for 25 minutes at 350");
    });
});
//# sourceMappingURL=factory.spec.js.map