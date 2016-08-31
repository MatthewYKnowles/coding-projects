System.register(["../src/HFDPChapter1"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HFDPChapter1_1;
    return {
        setters:[
            function (HFDPChapter1_1_1) {
                HFDPChapter1_1 = HFDPChapter1_1_1;
            }],
        execute: function() {
            describe("Mallard", () => {
                it("should quack", () => {
                    let mallard = new HFDPChapter1_1.Mallard();
                    expect(mallard.performQuack()).toBe("Quack");
                });
                it("should have its own display", () => {
                    let mallard = new HFDPChapter1_1.Mallard();
                    expect(mallard.display()).toBe("Mallard");
                });
                it("should swim", () => {
                    let mallard = new HFDPChapter1_1.Mallard();
                    expect(mallard.swim()).toBe("Swim");
                });
                it("should fly", () => {
                    let mallard = new HFDPChapter1_1.Mallard();
                    expect(mallard.performFly()).toBe("Fly");
                });
                it("should be able to change fly behavior with a method", () => {
                    let mallard = new HFDPChapter1_1.Mallard();
                    mallard.setQuackBehavior(new HFDPChapter1_1.Silence());
                    expect(mallard.performQuack()).toBe("Silence");
                });
            });
            describe("RedHeadDuck", () => {
                it("should quack", () => {
                    let redHeadDuck = new HFDPChapter1_1.RedHeadDuck();
                    expect(redHeadDuck.performQuack()).toBe(("Quack"));
                });
                it("should have its own Red head duck display", () => {
                    let redHeadDuck = new HFDPChapter1_1.RedHeadDuck();
                    expect(redHeadDuck.display()).toBe(("Red head duck"));
                });
            });
            describe("RubberDuck", () => {
                it("should squeak", () => {
                    let rubberDuck = new HFDPChapter1_1.RubberDuck();
                    expect(rubberDuck.performQuack()).toBe("Squeak");
                });
                it("should look like a rubber duck", () => {
                    let rubberDuck = new HFDPChapter1_1.RubberDuck();
                    expect(rubberDuck.display()).toBe("Rubber duck");
                });
                it("should not fly", () => {
                    let rubberDuck = new HFDPChapter1_1.RubberDuck();
                    expect(rubberDuck.performFly()).toBe("No fly");
                });
                it("should be able to switch to rocket powered flying", () => {
                    let rubberDuck = new HFDPChapter1_1.RubberDuck();
                    rubberDuck.setFlyBehavior(new HFDPChapter1_1.FlyRocketPowered());
                    expect(rubberDuck.performFly()).toBe("I'm flying with a rocket!");
                });
            });
            describe("DecoyDuck", () => {
                it("should not make any sound", () => {
                    let decoyDuck = new HFDPChapter1_1.DecoyDuck();
                    expect(decoyDuck.performQuack()).toBe("Silence");
                });
                it("should look like a duck", () => {
                    let decoyDuck = new HFDPChapter1_1.DecoyDuck();
                    expect(decoyDuck.display()).toBe("Decoy duck");
                });
            });
        }
    }
});
//# sourceMappingURL=HFDPChapter1.spec.js.map