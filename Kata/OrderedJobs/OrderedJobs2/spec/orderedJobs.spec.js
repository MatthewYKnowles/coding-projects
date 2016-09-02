"use strict";
var orderedJobs_1 = require("../src/orderedJobs");
describe("Ordered Jobs", function () {
    it("should return empty string for empty string", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("");
        expect(orderedJobs.getOrderedJobs()).toEqual("");
    });
    it("should return 1 job passed in", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("a");
    });
    it("should return 2 jobs passed in", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>\nb =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("ab");
    });
    it("should return 3 jobs passed in", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>\nb =>\nc =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("abc");
    });
    it("should return 3 jobs passed in respect 1 dependency", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>\nb => c\nc =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("acb");
    });
    it("should work with multiple dependencies", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>\nb => c\nc => f\nd => a\ne => b\nf =>");
        expect(orderedJobs.getOrderedJobs()).toEqual("afcdbe");
    });
    it("should return error when job dependency is itself", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>\nb =>\nc => c");
        expect(function () { orderedJobs.getOrderedJobs(); }).toThrow(new Error("job references self"));
    });
    it("should return error when dependencies are in a circle", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs("a =>\nb => c\nc => f\nd => a\ne =>\nf => b");
        expect(function () { orderedJobs.getOrderedJobs(); }).toThrow();
    });
});
//# sourceMappingURL=orderedJobs.spec.js.map