import {SimplePizzaFactory, CheesePizza, PepperoniPizza} from "../src/factory";
describe("Simple Pizza Factory", ()=> {
    it("should return a new cheese pizza", ()=> {
        let simplePizzaFactory: SimplePizzaFactory = new SimplePizzaFactory();
        expect(simplePizzaFactory.makePizza("cheese")).toEqual(new CheesePizza());
    });
    it("should return a new cheese pizza", ()=> {
        let simplePizzaFactory: SimplePizzaFactory = new SimplePizzaFactory();
        expect(simplePizzaFactory.makePizza("pepperoni")).toEqual(new PepperoniPizza());
    });
});