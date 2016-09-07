import {SimplePizzaFactory, CheesePizza, PepperoniPizza, ClamPizza, VeggiePizza} from "../src/factory";
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