import {
    SimplePizzaFactory, CheesePizza, PepperoniPizza, ClamPizza, VeggiePizza, NYPizzaStore, NYStyleCheesePizza
} from "../src/factory";

describe("Simple Pizza Factory", ()=> {
    let simplePizzaFactory: SimplePizzaFactory;
    beforeEach(()=> {
        simplePizzaFactory = new SimplePizzaFactory();
    });
    it("should return a new cheese pizza", ()=> {
        expect(simplePizzaFactory.createPizza("cheese")).toEqual(new CheesePizza());
    });
    it("should return a new cheese pizza", ()=> {
        expect(simplePizzaFactory.createPizza("pepperoni")).toEqual(new PepperoniPizza());
    });
    it("should return a new clam pizza", ()=> {
        expect(simplePizzaFactory.createPizza("clam")).toEqual(new ClamPizza());
    });
    it("should return a new veggie pizza", ()=> {
        expect(simplePizzaFactory.createPizza("veggie")).toEqual(new VeggiePizza());
    });
});

describe("Pizza Store", ()=> {
    it("should return a NYStyle cheese pizza", ()=> {
        let simplePizzaFactory: SimplePizzaFactory = new SimplePizzaFactory();
        let nYPizzaStore: NYPizzaStore = new NYPizzaStore(simplePizzaFactory);
        expect(nYPizzaStore.orderPizza("cheese")).toEqual(new NYStyleCheesePizza())
    });
});