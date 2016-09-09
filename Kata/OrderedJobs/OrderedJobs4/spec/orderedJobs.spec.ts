import {OrderJobs} from "../src/orderedJobs";
describe("Order Jobs", ()=> {
    it("should remove an empty string of jobs when no jobs are passed in", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("");
        expect(orderJobs.getOrderedJobs()).toEqual("");
    });
    it("should the one job passed in", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a =>");
        expect(orderJobs.getOrderedJobs()).toEqual("a");
    });
    it("should add multiple jobs", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a =>\nb =>\nc =>");
        expect(orderJobs.getOrderedJobs()).toEqual("abc");
    });
    it("should respect one dependency", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a =>\nb => c\nc =>");
        expect(orderJobs.getOrderedJobs()).toEqual("acb");
    });
    it("should respect multiple dependencies", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a => b\nb => c\nc => ");
        expect(orderJobs.getOrderedJobs()).toEqual("cba");
    });
    it("should respect multiple dependencies", ()=> {
        let orderedJobs: OrderJobs = new OrderJobs("a =>\nb => c\nc => f\nd => a\ne => b\nf =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("afcdbe");
    });
    it("should throw error for self reference", ()=> {
        let orderedJobs: OrderJobs = new OrderJobs("a =>\nb =>\nc => c");
        expect(() => {orderedJobs.getOrderedJobs()}).toThrow(new Error("self referencing dependency"));
    });
    it("should throw error for endless loop", ()=> {
        let orderedJobs: OrderJobs = new OrderJobs("a => b\nb => c\nc => a");
        expect(() => {orderedJobs.getOrderedJobs()}).toThrow(new Error("endless loop"));
    });
});