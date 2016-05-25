System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Duck, FlyWithWings, NoFly, FlyRocketPowered, Quack, Squeak, Silence, Mallard, RedHeadDuck, RubberDuck, DecoyDuck;
    return {
        setters:[],
        execute: function() {
            class Duck {
                performQuack() {
                    return this.quackBehavior.performQuack();
                }
                setQuackBehavior(object) {
                    this.quackBehavior = object;
                }
                performFly() {
                    return this.flyBehavior.performFly();
                }
                setFlyBehavior(newBehavior) {
                    this.flyBehavior = newBehavior;
                }
                swim() {
                    return "Swim";
                }
            }
            class FlyWithWings {
                performFly() {
                    return "Fly";
                }
            }
            class NoFly {
                performFly() {
                    return "No fly";
                }
            }
            class FlyRocketPowered {
                performFly() {
                    return "I'm flying with a rocket!";
                }
            }
            class Quack {
                performQuack() {
                    return "Quack";
                }
            }
            class Squeak {
                performQuack() {
                    return "Squeak";
                }
            }
            class Silence {
                performQuack() {
                    return "Silence";
                }
            }
            class Mallard extends Duck {
                constructor() {
                    super();
                    this.quackBehavior = new Quack();
                    this.flyBehavior = new FlyWithWings();
                }
                display() {
                    return "Mallard";
                }
            }
            class RedHeadDuck extends Duck {
                constructor() {
                    super();
                    this.quackBehavior = new Quack();
                    this.flyBehavior = new FlyWithWings();
                }
                display() {
                    return "Red head duck";
                }
            }
            class RubberDuck extends Duck {
                constructor() {
                    super();
                    this.quackBehavior = new Squeak();
                    this.flyBehavior = new NoFly();
                }
                display() {
                    return "Rubber duck";
                }
            }
            class DecoyDuck extends Duck {
                constructor() {
                    super();
                    this.quackBehavior = new Silence();
                    this.flyBehavior = new NoFly();
                }
                display() {
                    return "Decoy duck";
                }
            }
            exports_1("Mallard", Mallard);
            exports_1("RedHeadDuck", RedHeadDuck);
            exports_1("RubberDuck", RubberDuck);
            exports_1("DecoyDuck", DecoyDuck);
            exports_1("Silence", Silence);
            exports_1("FlyRocketPowered", FlyRocketPowered);
        }
    }
});
//# sourceMappingURL=HFDPChapter1.js.map