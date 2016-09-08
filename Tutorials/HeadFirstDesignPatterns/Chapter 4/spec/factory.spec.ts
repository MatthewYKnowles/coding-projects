import {NYPizzaStore, NYStyleCheesePizza, NYStyleVeggiePizza, Pizza} from "../src/factory";

describe("Pizza Store", ()=> {
    it("should return a NYStyle cheese pizza", ()=> {
        let nYPizzaStore: NYPizzaStore = new NYPizzaStore();
        expect(nYPizzaStore.orderPizza("cheese")).toEqual(new NYStyleCheesePizza())
    });
    it("should return a NYStyle veggie pizza", ()=> {
        let nyPizzaStore: NYPizzaStore = new NYPizzaStore();
        expect(nyPizzaStore.orderPizza("veggie")).toEqual(new NYStyleVeggiePizza())
    });
});
describe("Pizza", ()=> {
    it("should bake a pizza", ()=> {
        let pizza: Pizza = new NYStyleCheesePizza();
        expect(pizza.bake()).toEqual("Bake for 25 minutes at 350")
    });
    it("should cut a pizza", ()=> {
        let pizza: Pizza = new NYStyleCheesePizza();
        expect(pizza.cut()).toEqual("Cutting the pizza into diagonal slices")
    });
});