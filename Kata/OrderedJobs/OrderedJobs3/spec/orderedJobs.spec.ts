import {OrderedJobs} from "../src/orderedJobs";
describe("Ordered Jobs", ()=> {
    it("should return an empty string when nothing is passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("");
        expect(orderedJobs.getOrderedJobs()).toEqual("");
    });
    it("should return the one job passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("a =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("a");
    });
    it("should return the one job passed in for b", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("b =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("b");
    });
    it("should return all jobs passed in with no dependencies", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("a =>\nb =>\nc =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("abc");
    });
    it("should respect one dependency", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("a =>\nb => c\nc =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("acb");
    });
    it("should respect multiple dependencies", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("a =>\nb => c\nc => f\nd => a\ne => b\nf =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("afcdbe");
    });
    it("should throw Error for self reference", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("a =>\nb => \nc => c");
        expect(()=> {orderedJobs.getOrderedJobs()}).toThrow(new Error("Self referencing dependency"))
    });
    it("should throw Error for circular dependency", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("a => b\nb => c\nc => a");
        expect(()=> {orderedJobs.getOrderedJobs()}).toThrow(new Error("Circular dependency"))
    });
});