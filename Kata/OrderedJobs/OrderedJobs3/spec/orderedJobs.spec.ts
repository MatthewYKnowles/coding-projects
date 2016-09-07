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
});