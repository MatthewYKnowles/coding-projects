"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Duck = (function () {
    function Duck() {
    }
    Duck.prototype.performQuack = function () {
        return this.quackBehavior.performQuack();
    };
    Duck.prototype.setQuackBehavior = function (object) {
        this.quackBehavior = object;
    };
    Duck.prototype.performFly = function () {
        return this.flyBehavior.performFly();
    };
    Duck.prototype.setFlyBehavior = function (newBehavior) {
        this.flyBehavior = newBehavior;
    };
    Duck.prototype.swim = function () {
        return "Swim";
    };
    return Duck;
}());
var FlyWithWings = (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.performFly = function () {
        return "Fly";
    };
    return FlyWithWings;
}());
var NoFly = (function () {
    function NoFly() {
    }
    NoFly.prototype.performFly = function () {
        return "No fly";
    };
    return NoFly;
}());
var FlyRocketPowered = (function () {
    function FlyRocketPowered() {
    }
    FlyRocketPowered.prototype.performFly = function () {
        return "I'm flying with a rocket!";
    };
    return FlyRocketPowered;
}());
exports.FlyRocketPowered = FlyRocketPowered;
var Quack = (function () {
    function Quack() {
    }
    Quack.prototype.performQuack = function () {
        return "Quack";
    };
    return Quack;
}());
var Squeak = (function () {
    function Squeak() {
    }
    Squeak.prototype.performQuack = function () {
        return "Squeak";
    };
    return Squeak;
}());
var Silence = (function () {
    function Silence() {
    }
    Silence.prototype.performQuack = function () {
        return "Silence";
    };
    return Silence;
}());
exports.Silence = Silence;
var Mallard = (function (_super) {
    __extends(Mallard, _super);
    function Mallard() {
        _super.call(this);
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }
    Mallard.prototype.display = function () {
        return "Mallard";
    };
    return Mallard;
}(Duck));
exports.Mallard = Mallard;
var RedHeadDuck = (function (_super) {
    __extends(RedHeadDuck, _super);
    function RedHeadDuck() {
        _super.call(this);
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }
    RedHeadDuck.prototype.display = function () {
        return "Red head duck";
    };
    return RedHeadDuck;
}(Duck));
exports.RedHeadDuck = RedHeadDuck;
var RubberDuck = (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        _super.call(this);
        this.quackBehavior = new Squeak();
        this.flyBehavior = new NoFly();
    }
    RubberDuck.prototype.display = function () {
        return "Rubber duck";
    };
    return RubberDuck;
}(Duck));
exports.RubberDuck = RubberDuck;
var DecoyDuck = (function (_super) {
    __extends(DecoyDuck, _super);
    function DecoyDuck() {
        _super.call(this);
        this.quackBehavior = new Silence();
        this.flyBehavior = new NoFly();
    }
    DecoyDuck.prototype.display = function () {
        return "Decoy duck";
    };
    return DecoyDuck;
}(Duck));
exports.DecoyDuck = DecoyDuck;
//# sourceMappingURL=strategy.js.map