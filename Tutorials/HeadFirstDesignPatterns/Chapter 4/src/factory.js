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
    Pizza.prototype.getName = function () {
        return this._name;
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
var ChicagoPizzaStore = (function () {
    function ChicagoPizzaStore() {
    }
    ChicagoPizzaStore.prototype.orderPizza = function (type) {
        if (type === "veggie") {
            return new ChicagoStyleVeggiePizza();
        }
    };
    return ChicagoPizzaStore;
}());
exports.ChicagoPizzaStore = ChicagoPizzaStore;
var NYStyleCheesePizza = (function (_super) {
    __extends(NYStyleCheesePizza, _super);
    function NYStyleCheesePizza() {
        this._name = "NY Style Sauce and Cheese Pizza";
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
var ChicagoStyleCheesePizza = (function (_super) {
    __extends(ChicagoStyleCheesePizza, _super);
    function ChicagoStyleCheesePizza() {
        this._name = "Chicago Style Deep Dish Cheese Pizza";
    }
    return ChicagoStyleCheesePizza;
}(Pizza));
exports.ChicagoStyleCheesePizza = ChicagoStyleCheesePizza;
var ChicagoStyleVeggiePizza = (function (_super) {
    __extends(ChicagoStyleVeggiePizza, _super);
    function ChicagoStyleVeggiePizza() {
        _super.apply(this, arguments);
    }
    return ChicagoStyleVeggiePizza;
}(Pizza));
exports.ChicagoStyleVeggiePizza = ChicagoStyleVeggiePizza;
//# sourceMappingURL=factory.js.map