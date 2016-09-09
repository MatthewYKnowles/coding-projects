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
});