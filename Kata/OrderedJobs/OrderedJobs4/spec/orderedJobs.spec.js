"use strict";
var orderedJobs_1 = require("../src/orderedJobs");
describe("Order Jobs", function () {
    it("should return no jobs when no jobs are passed in", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("");
        expect(orderJobs.getOrderedJobs()).toEqual("");
    });
    it("should return one job passed in", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a =>");
        expect(orderJobs.getOrderedJobs()).toEqual("a");
    });
    it("should return multiple jobs passed in", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a =>\nb =>\nc =>");
        expect(orderJobs.getOrderedJobs()).toEqual("abc");
    });
    it("should respect one dependency", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a =>\nb => c\nc =>");
        expect(orderJobs.getOrderedJobs()).toEqual("acb");
    });
    it("should respect 2 dependency", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a => c\nb => c\nc =>");
        expect(orderJobs.getOrderedJobs()).toEqual("cab");
    });
    it("should respect 4 dependencies", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a => \nb => c\nc => f\nd => a\ne => b\nf =>");
        expect(orderJobs.getOrderedJobs()).toEqual("afcdbe");
    });
    it("should throw error if job depends on itself", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a =>\nb =>\nc => c");
        expect(function () { orderJobs.getOrderedJobs(); }).toThrow(new Error("Job can not depend on itself"));
    });
    it("should throw error if circular dependency", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a => b\nb => c\nc => a");
        expect(function () { orderJobs.getOrderedJobs(); }).toThrow(new Error("circular dependency"));
    });
});
//# sourceMappingURL=orderedJobs.spec.js.map