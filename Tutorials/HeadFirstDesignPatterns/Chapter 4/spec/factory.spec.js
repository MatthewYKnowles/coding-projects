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
});
//# sourceMappingURL=factory.spec.js.map