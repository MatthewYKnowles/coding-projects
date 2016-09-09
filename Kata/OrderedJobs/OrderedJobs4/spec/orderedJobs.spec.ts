import {OrderJobs} from "../src/orderedJobs";
describe("Order Jobs", ()=> {
    it("should return no jobs when no jobs are passed in", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("");
        expect(orderJobs.getOrderedJobs()).toEqual("")
    });
    it("should return one job passed in", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a =>");
        expect(orderJobs.getOrderedJobs()).toEqual("a")
    });
    it("should return multiple jobs passed in", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a =>\nb =>\nc =>");
        expect(orderJobs.getOrderedJobs()).toEqual("abc")
    });
    it("should respect one dependency", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a =>\nb => c\nc =>");
        expect(orderJobs.getOrderedJobs()).toEqual("acb")
    });
    it("should respect 2 dependency", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a => c\nb => c\nc =>");
        expect(orderJobs.getOrderedJobs()).toEqual("cab")
    });
    it("should respect 4 dependencies", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a => \nb => c\nc => f\nd => a\ne => b\nf =>");
        expect(orderJobs.getOrderedJobs()).toEqual("afcdbe")
    });
    it("should throw error if job depends on itself", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a =>\nb =>\nc => c");
        expect(()=> {orderJobs.getOrderedJobs()}).toThrow(new Error("Job can not depend on itself"));
    });
    it("should throw error if circular dependency", ()=> {
        let orderJobs: OrderJobs = new OrderJobs("a => b\nb => c\nc => a");
        expect(()=> {orderJobs.getOrderedJobs()}).toThrow(new Error("circular dependency"));
    });
});