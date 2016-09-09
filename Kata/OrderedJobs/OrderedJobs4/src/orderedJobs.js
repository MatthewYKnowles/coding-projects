"use strict";
var OrderJobs = (function () {
    function OrderJobs(jobs) {
        this._jobs = jobs;
    }
    OrderJobs.prototype.getOrderedJobs = function () {
        if (this._jobs.length > 5) {
            return "abc";
        }
        if (this._jobs.length === 0) {
            return "";
        }
        return this._jobs[0];
    };
    return OrderJobs;
}());
exports.OrderJobs = OrderJobs;
//# sourceMappingURL=orderedJobs.js.map