import {OrderedJobs} from "../src/orderedJobs";

describe("Ordered Jobs", ()=> {
    it("should return empty string for empty string", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("");
        expect(orderedJobs.getOrderedJobs()).toEqual("")
    });
    it("should return 1 job passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("a =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("a")
    });
    it("should return 2 jobs passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("a =>\nb =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("ab")
    });
    it("should return 3 jobs passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("a =>\nb =>\nc =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("abc")
    });
    it("should return 3 jobs passed in respect 1 dependency", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs("a =>\nb => c\nc =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("acb")
    });
});