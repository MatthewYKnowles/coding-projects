"use strict";
var orderedJobs_1 = require("../src/orderedJobs");
describe("Order Jobs", function () {
    it("should remove an empty string of jobs when no jobs are passed in", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("");
        expect(orderJobs.getOrderedJobs()).toEqual("");
    });
    it("should the one job passed in", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a =>");
        expect(orderJobs.getOrderedJobs()).toEqual("a");
    });
    it("should add multiple jobs", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a =>\nb =>\nc =>");
        expect(orderJobs.getOrderedJobs()).toEqual("abc");
    });
    it("should respect one dependency", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a =>\nb => c\nc =>");
        expect(orderJobs.getOrderedJobs()).toEqual("acb");
    });
    it("should respect multiple dependencies", function () {
        var orderJobs = new orderedJobs_1.OrderJobs("a => b\nb => c\nc => ");
        expect(orderJobs.getOrderedJobs()).toEqual("cba");
    });
    it("should respect multiple dependencies", function () {
        var orderedJobs = new orderedJobs_1.OrderJobs("a =>\nb => c\nc => f\nd => a\ne => b\nf =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("afcdbe");
    });
    it("should throw error for self reference", function () {
        var orderedJobs = new orderedJobs_1.OrderJobs("a =>\nb =>\nc => c");
        expect(function () { orderedJobs.getOrderedJobs(); }).toThrow(new Error("self referencing dependency"));
    });
    it("should throw error for endless loop", function () {
        var orderedJobs = new orderedJobs_1.OrderJobs("a => b\nb => c\nc => a");
        expect(function () { orderedJobs.getOrderedJobs(); }).toThrow(new Error("endless loop"));
    });
});
//# sourceMappingURL=orderedJobs.spec.js.map