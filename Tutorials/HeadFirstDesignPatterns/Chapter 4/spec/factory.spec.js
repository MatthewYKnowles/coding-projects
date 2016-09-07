"use strict";
var factory_1 = require("../src/factory");
describe("Simple Pizza Factory", function () {
    it("should return a new cheese pizza", function () {
        var simplePizzaFactory = new factory_1.SimplePizzaFactory();
        expect(simplePizzaFactory.makePizza("cheese")).toEqual(new factory_1.CheesePizza());
    });
    it("should return a new cheese pizza", function () {
        var simplePizzaFactory = new factory_1.SimplePizzaFactory();
        expect(simplePizzaFactory.makePizza("pepperoni")).toEqual(new factory_1.PepperoniPizza());
    });
});
//# sourceMappingURL=factory.spec.js.map