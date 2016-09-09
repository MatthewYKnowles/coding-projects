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
});
//# sourceMappingURL=orderedJobs.spec.js.map