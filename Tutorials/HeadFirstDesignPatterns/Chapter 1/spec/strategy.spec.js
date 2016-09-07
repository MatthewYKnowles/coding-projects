"use strict";
var strategy_1 = require("../src/strategy");
describe("Mallard", function () {
    it("should quack", function () {
        var mallard = new strategy_1.Mallard();
        expect(mallard.performQuack()).toBe("Quack");
    });
    it("should have its own display", function () {
        var mallard = new strategy_1.Mallard();
        expect(mallard.display()).toBe("Mallard");
    });
    it("should swim", function () {
        var mallard = new strategy_1.Mallard();
        expect(mallard.swim()).toBe("Swim");
    });
    it("should fly", function () {
        var mallard = new strategy_1.Mallard();
        expect(mallard.performFly()).toBe("Fly");
    });
    it("should be able to change fly behavior with a method", function () {
        var mallard = new strategy_1.Mallard();
        mallard.setQuackBehavior(new strategy_1.Silence());
        expect(mallard.performQuack()).toBe("Silence");
    });
});
describe("RedHeadDuck", function () {
    it("should quack", function () {
        var redHeadDuck = new strategy_1.RedHeadDuck();
        expect(redHeadDuck.performQuack()).toBe(("Quack"));
    });
    it("should have its own Red head duck display", function () {
        var redHeadDuck = new strategy_1.RedHeadDuck();
        expect(redHeadDuck.display()).toBe(("Red head duck"));
    });
});
describe("RubberDuck", function () {
    it("should squeak", function () {
        var rubberDuck = new strategy_1.RubberDuck();
        expect(rubberDuck.performQuack()).toBe("Squeak");
    });
    it("should look like a rubber duck", function () {
        var rubberDuck = new strategy_1.RubberDuck();
        expect(rubberDuck.display()).toBe("Rubber duck");
    });
    it("should not fly", function () {
        var rubberDuck = new strategy_1.RubberDuck();
        expect(rubberDuck.performFly()).toBe("No fly");
    });
    it("should be able to switch to rocket powered flying", function () {
        var rubberDuck = new strategy_1.RubberDuck();
        rubberDuck.setFlyBehavior(new strategy_1.FlyRocketPowered());
        expect(rubberDuck.performFly()).toBe("I'm flying with a rocket!");
    });
});
describe("DecoyDuck", function () {
    it("should not make any sound", function () {
        var decoyDuck = new strategy_1.DecoyDuck();
        expect(decoyDuck.performQuack()).toBe("Silence");
    });
    it("should look like a duck", function () {
        var decoyDuck = new strategy_1.DecoyDuck();
        expect(decoyDuck.display()).toBe("Decoy duck");
    });
});
//# sourceMappingURL=strategy.spec.js.map