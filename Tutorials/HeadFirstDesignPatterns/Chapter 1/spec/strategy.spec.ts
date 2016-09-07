import {Mallard, RedHeadDuck, RubberDuck, DecoyDuck, Silence, FlyRocketPowered} from "../src/strategy"
describe("Mallard", ()=> {
    it("should quack", ()=> {
        let mallard: Mallard = new Mallard();
        expect(mallard.performQuack()).toBe("Quack");  
    });
    it("should have its own display", ()=> {
        let mallard: Mallard = new Mallard();
        expect(mallard.display()).toBe("Mallard");
    });
    it("should swim", ()=> {
        let mallard: Mallard = new Mallard();
        expect(mallard.swim()).toBe("Swim");
    });
    it("should fly", ()=> {
        let mallard: Mallard = new Mallard();
        expect(mallard.performFly()).toBe("Fly");
    });
    it("should be able to change fly behavior with a method", ()=> {
        let mallard: Mallard = new Mallard();
        mallard.setQuackBehavior( new Silence());
        expect(mallard.performQuack()).toBe("Silence");
    });
});
describe("RedHeadDuck", ()=> {
    it("should quack", ()=> {
        let redHeadDuck: RedHeadDuck = new RedHeadDuck();
        expect(redHeadDuck.performQuack()).toBe(("Quack"))
    });
    it("should have its own Red head duck display", ()=> {
        let redHeadDuck: RedHeadDuck = new RedHeadDuck();
        expect(redHeadDuck.display()).toBe(("Red head duck"))
    });
});
describe("RubberDuck", ()=> {
    it("should squeak", ()=> {
        let rubberDuck: RubberDuck = new RubberDuck();
        expect(rubberDuck.performQuack()).toBe("Squeak");
    });
    it("should look like a rubber duck", ()=> {
        let rubberDuck: RubberDuck = new RubberDuck();
        expect(rubberDuck.display()).toBe("Rubber duck");
    });
    it("should not fly", ()=> {
        let rubberDuck: RubberDuck = new RubberDuck();
        expect(rubberDuck.performFly()).toBe("No fly");
    });
    it("should be able to switch to rocket powered flying", ()=> {
        let rubberDuck: RubberDuck = new RubberDuck();
        rubberDuck.setFlyBehavior( new FlyRocketPowered());
        expect(rubberDuck.performFly()).toBe("I'm flying with a rocket!");
    });
});
describe("DecoyDuck", ()=> {
    it("should not make any sound", ()=> {
        let decoyDuck: DecoyDuck = new DecoyDuck();
        expect(decoyDuck.performQuack()).toBe("Silence")
    });
    it("should look like a duck", ()=> {
        let decoyDuck: DecoyDuck = new DecoyDuck();
        expect(decoyDuck.display()).toBe("Decoy duck")
    });
});