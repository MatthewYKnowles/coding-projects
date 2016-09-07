"use strict";
var orderedJobs_1 = require("../src/orderedJobs");
describe("Ordered Jobs", function () {
    it("should return an empty string when nothing is passed in", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("");
        expect(orderedJobs.getOrderedJobs()).toEqual("");
    });
    it("should return the one job passed in", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("a");
    });
    it("should return the one job passed in for b", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("b =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("b");
    });
    it("should return all jobs passed in with no dependencies", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>\nb =>\nc =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("abc");
    });
    it("should respect one dependency", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>\nb => c\nc =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("acb");
    });
    it("should respect multiple dependencies", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>\nb => c\nc => f\nd => a\ne => b\nf =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("afcdbe");
    });
    it("should throw Error for self reference", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>\nb => \nc => c");
        expect(function () { orderedJobs.getOrderedJobs(); }).toThrow(new Error("Self referencing dependency"));
    });
    it("should throw Error for circular dependency", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a => b\nb => c\nc => a");
        expect(function () { orderedJobs.getOrderedJobs(); }).toThrow(new Error("Circular dependency"));
    });
});
//# sourceMappingURL=orderedJobs.spec.js.map