"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pizza = (function () {
    function Pizza() {
        this._order = "";
    }
    Pizza.prototype.bake = function () {
        this._order += "Bake for 25 minutes at 350";
    };
    Pizza.prototype.cut = function () {
        this._order += "Cutting the pizza into diagonal slices";
    };
    Pizza.prototype.box = function () {
        this._order += "Place pizza in official PizzaStore box";
    };
    Pizza.prototype.getName = function () {
        return this._name;
    };
    Pizza.prototype.getOrder = function () {
        return this._order;
    };
    Pizza.prototype.prepare = function () {
        this._order += "Preparing " + this._name + "\n";
        this._order += "Tossing dough...\n";
        this._order += "Adding sauce...\n";
        this._order += "Adding toppings: " + this._toppings[0];
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
        var pizza = null;
        if (type === "cheese") {
            pizza = new NYStyleCheesePizza();
        }
        else if (type === "veggie") {
            pizza = new NYStyleVeggiePizza();
        }
        pizza.bake();
        return pizza;
    };
    return NYPizzaStore;
}());
exports.NYPizzaStore = NYPizzaStore;
var ChicagoPizzaStore = (function () {
    function ChicagoPizzaStore() {
    }
    ChicagoPizzaStore.prototype.orderPizza = function (type) {
        var pizza = null;
        if (type === "cheese") {
            pizza = new ChicagoStyleCheesePizza();
        }
        else if (type === "veggie") {
            pizza = new ChicagoStyleVeggiePizza();
        }
        pizza.bake();
        return pizza;
    };
    return ChicagoPizzaStore;
}());
exports.ChicagoPizzaStore = ChicagoPizzaStore;
var NYStyleCheesePizza = (function (_super) {
    __extends(NYStyleCheesePizza, _super);
    function NYStyleCheesePizza() {
        _super.call(this);
        this._name = "NY Style Sauce and Cheese Pizza";
        this._toppings = ["Grated Reggiano Cheese"];
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
        _super.call(this);
        this._name = "Chicago Style Deep Dish Cheese Pizza";
        this._toppings = ["Shredded Mozzarella Cheese"];
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