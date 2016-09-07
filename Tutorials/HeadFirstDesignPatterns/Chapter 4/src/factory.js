"use strict";
var SimplePizzaFactory = (function () {
    function SimplePizzaFactory() {
    }
    SimplePizzaFactory.prototype.makePizza = function (pizzaType) {
        var pizza = null;
        if (pizzaType === "cheese") {
            pizza = new CheesePizza();
        }
        else if (pizzaType === "pepperoni") {
            pizza = new PepperoniPizza();
        }
        return pizza;
    };
    return SimplePizzaFactory;
}());
exports.SimplePizzaFactory = SimplePizzaFactory;
var CheesePizza = (function () {
    function CheesePizza() {
    }
    return CheesePizza;
}());
exports.CheesePizza = CheesePizza;
var PepperoniPizza = (function () {
    function PepperoniPizza() {
    }
    return PepperoniPizza;
}());
exports.PepperoniPizza = PepperoniPizza;
//# sourceMappingURL=factory.js.map