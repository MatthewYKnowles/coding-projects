"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pizza = (function () {
    function Pizza() {
    }
    Pizza.prototype.bake = function () {
        return "Bake for 25 minutes at 350";
    };
    Pizza.prototype.cut = function () {
        return "Cutting the pizza into diagonal slices";
    };
    Pizza.prototype.box = function () {
        return "Place pizza in official PizzaStore box";
    };
    return Pizza;
}());
exports.Pizza = Pizza;
var PizzaStore = (function () {
    function PizzaStore() {
    }
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
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
//# sourceMappingURL=factory.js.map