import {OrderedJobs} from "../src/orderedJobs";
describe("Ordered Jobs", ()=> {
    it("should return nothing when nothing is passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("")).toEqual("")
    });
    it("should return one job when one job is passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>")).toEqual("a")
    });
    it("should return two jobs when two jobs are passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb =>")).toEqual("ab")
    });
    it("should return three jobs when three jobs are passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb =>\nc =>")).toEqual("abc")
    });
    it("should return correct order with one dependency", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb => c\nc =>")).toEqual("acb")
    });
    it("should return correct order with two dependencies", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a => c\nb => c\nc =>")).toEqual("cab")
    });
    it("should return correct order with two dependencies must iterate twice", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a => b\nb => c\nc =>")).toEqual("cba")
    });
    it("should return correct order with two dependencies must iterate twice", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a => c\nb => a\nc =>")).toEqual("cab")
    });
    it("should return correct order 6 jobs and multiple dependencies", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb => c\nc => f\nd => a\ne => b\nf =>")).toEqual("afcdbe")
    });
    it("should return error saying can't have circle dependencies", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb => c\nc => f\nd => a\ne => b\nf => b")).toEqual("error")
    });
});