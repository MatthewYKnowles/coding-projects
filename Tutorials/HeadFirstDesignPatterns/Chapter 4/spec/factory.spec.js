"use strict";
var factory_1 = require("../src/factory");
describe("Simple Pizza Factory", function () {
    var simplePizzaFactory;
    beforeEach(function () {
        simplePizzaFactory = new factory_1.SimplePizzaFactory();
    });
    it("should return a new cheese pizza", function () {
        expect(simplePizzaFactory.makePizza("cheese")).toEqual(new factory_1.CheesePizza());
    });
    it("should return a new cheese pizza", function () {
        expect(simplePizzaFactory.makePizza("pepperoni")).toEqual(new factory_1.PepperoniPizza());
    });
    it("should return a new clam pizza", function () {
        expect(simplePizzaFactory.makePizza("clam")).toEqual(new factory_1.ClamPizza());
    });
    it("should return a new veggie pizza", function () {
        expect(simplePizzaFactory.makePizza("veggie")).toEqual(new factory_1.VeggiePizza());
    });
});
//# sourceMappingURL=factory.spec.js.map