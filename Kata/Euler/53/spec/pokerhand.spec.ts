import {Pokerhand} from "src/pokerhand"
describe("function name", ()=> {
    it("should return true", ()=> {
        expect(true).toBe(true);
    });
    it("should return true", ()=> {
        let pokerhand: Pokerhand = new Pokerhand();
        expect(pokerhand.true()).toBe(true);
    });
});