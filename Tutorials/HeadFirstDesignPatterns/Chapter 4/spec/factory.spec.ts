import {SimplePizzaFactory, CheesePizza, PepperoniPizza, ClamPizza, VeggiePizza, PizzaStore} from "../src/factory";
describe("Simple Pizza Factory", ()=> {
    let simplePizzaFactory: SimplePizzaFactory;
    beforeEach(()=> {
        simplePizzaFactory = new SimplePizzaFactory();
    });
    it("should return a new cheese pizza", ()=> {
        expect(simplePizzaFactory.makePizza("cheese")).toEqual(new CheesePizza());
    });
    it("should return a new cheese pizza", ()=> {
        expect(simplePizzaFactory.makePizza("pepperoni")).toEqual(new PepperoniPizza());
    });
    it("should return a new clam pizza", ()=> {
        expect(simplePizzaFactory.makePizza("clam")).toEqual(new ClamPizza());
    });
    it("should return a new veggie pizza", ()=> {
        expect(simplePizzaFactory.makePizza("veggie")).toEqual(new VeggiePizza());
    });
});

describe("Pizza Store", ()=> {
    it("should return a cheese pizza", ()=> {
        let simplePizzaFactory: SimplePizzaFactory = new SimplePizzaFactory();
        let pizzaStore: PizzaStore = new PizzaStore(simplePizzaFactory);
        expect(pizzaStore.orderPizza("cheese")).toEqual(new CheesePizza())
    });
});