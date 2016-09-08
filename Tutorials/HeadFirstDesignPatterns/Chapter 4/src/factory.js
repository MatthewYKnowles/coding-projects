"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PizzaStore = (function () {
    function PizzaStore() {
    }
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
var Pizza = (function () {
    function Pizza() {
    }
    Pizza.prototype.bake = function () {
        return "Bake for 25 minutes at 350";
    };
    return Pizza;
}());
exports.Pizza = Pizza;
var NYPizzaStore = (function () {
    function NYPizzaStore() {
    }
    NYPizzaStore.prototype.orderPizza = function (type) {
        if (type === "cheese") {
            return new NYStyleCheesePizza();
        }
        else if (type === "veggie") {
            return new NYStyleVeggiePizza();
        }
    };
    return NYPizzaStore;
}());
exports.NYPizzaStore = NYPizzaStore;
var NYStyleCheesePizza = (function (_super) {
    __extends(NYStyleCheesePizza, _super);
    function NYStyleCheesePizza() {
        _super.apply(this, arguments);
    }
    return NYStyleCheesePizza;
}(Pizza));
exports.NYStyleCheesePizza = NYStyleCheesePizza;
var NYStyleVeggiePizza = (function (_super) {
    __extends(NYStyleVeggiePizza, _super);
    function NYStyleVeggiePizza() {
        _super.apply(this, arguments);
    }
    return NYStyleVeggiePizza;
}(Pizza));
exports.NYStyleVeggiePizza = NYStyleVeggiePizza;
var SimplePizzaFactory = (function () {
    function SimplePizzaFactory() {
    }
    SimplePizzaFactory.prototype.createPizza = function (type) {
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
    CheesePizza.prototype.bake = function () {
        return undefined;
    };
    return CheesePizza;
}());
exports.CheesePizza = CheesePizza;
var PepperoniPizza = (function () {
    function PepperoniPizza() {
    }
    PepperoniPizza.prototype.bake = function () {
        return undefined;
    };
    return PepperoniPizza;
}());
exports.PepperoniPizza = PepperoniPizza;
var ClamPizza = (function () {
    function ClamPizza() {
    }
    ClamPizza.prototype.bake = function () {
        return undefined;
    };
    return ClamPizza;
}());
exports.ClamPizza = ClamPizza;
var VeggiePizza = (function () {
    function VeggiePizza() {
    }
    VeggiePizza.prototype.bake = function () {
        return undefined;
    };
    return VeggiePizza;
}());
exports.VeggiePizza = VeggiePizza;
//# sourceMappingURL=factory.js.map