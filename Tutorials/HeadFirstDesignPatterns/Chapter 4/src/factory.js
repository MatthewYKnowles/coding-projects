"use strict";
var PizzaStore = (function () {
    function PizzaStore(factory) {
        this._factory = factory;
    }
    PizzaStore.prototype.orderPizza = function (type) {
        return new CheesePizza();
    };
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
var SimplePizzaFactory = (function () {
    function SimplePizzaFactory() {
    }
    SimplePizzaFactory.prototype.makePizza = function (type) {
        var pizza = null;
        if (type === "cheese") {
            pizza = new CheesePizza();
        }
        else if (type === "pepperoni") {
            pizza = new PepperoniPizza();
        }
        else if (type === "clam") {
            pizza = new ClamPizza();
        }
        else if (type === "veggie") {
            pizza = new VeggiePizza();
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
var ClamPizza = (function () {
    function ClamPizza() {
    }
    return ClamPizza;
}());
exports.ClamPizza = ClamPizza;
var VeggiePizza = (function () {
    function VeggiePizza() {
    }
    return VeggiePizza;
}());
exports.VeggiePizza = VeggiePizza;
//# sourceMappingURL=factory.js.map