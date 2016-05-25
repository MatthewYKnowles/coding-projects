abstract class Duck {
    quackBehavior: IQuackBehavior;
    flyBehavior: IFlyBehavior;

    performQuack(): string {
        return this.quackBehavior.performQuack();
    }

    setQuackBehavior(object): void {
        this.quackBehavior = object;
    }

    performFly(): string {
        return this.flyBehavior.performFly();
    }

    setFlyBehavior(newBehavior): void {
        this.flyBehavior = newBehavior;
    }

    swim(): string {
        return "Swim";
    }

    abstract display(): string;
}

interface IFlyBehavior {
    performFly(): string;
}

class FlyWithWings implements IFlyBehavior {
    performFly():string {
        return "Fly";
    }
}

class NoFly implements IFlyBehavior {
    performFly(): string {
        return "No fly";
    }
}

class FlyRocketPowered implements IFlyBehavior {
    performFly():string {
        return "I'm flying with a rocket!";
    }
}

interface IQuackBehavior {
    performQuack(): string;
}

class Quack implements IQuackBehavior {
    performQuack():string {
        return "Quack";
    }
}

class Squeak implements IQuackBehavior {
    performQuack():string {
        return "Squeak";
    }
}

class Silence implements IQuackBehavior {
    performQuack():string {
        return "Silence";
    }
}

class Mallard extends Duck{

    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display() {
        return "Mallard";
    }
}

class RedHeadDuck extends Duck{

    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display() {
        return "Red head duck"
    }
}

class RubberDuck extends Duck {

    constructor() {
        super();
        this.quackBehavior = new Squeak();
        this.flyBehavior = new NoFly();
    }

    display():string {
        return "Rubber duck";
    }
}

class DecoyDuck extends Duck {

    constructor() {
        super();
        this.quackBehavior = new Silence();
        this.flyBehavior = new NoFly();
    }

    display():string {
        return "Decoy duck";
    }

}

export {Mallard, RedHeadDuck, RubberDuck, DecoyDuck, Silence, FlyRocketPowered}