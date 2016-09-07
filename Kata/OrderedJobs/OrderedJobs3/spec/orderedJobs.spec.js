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
});
//# sourceMappingURL=orderedJobs.spec.js.map