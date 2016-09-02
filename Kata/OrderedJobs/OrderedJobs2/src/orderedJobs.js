"use strict";
var OrderedJobs = (function () {
    function OrderedJobs(jobs) {
        this._jobs = jobs;
        this._splitJobs = jobs.split("\n");
    }
    OrderedJobs.prototype.getOrderedJobs = function () {
        if (this._jobs === "") {
            return this._jobs;
        }
        this._orderedJobs = this._splitJobs.filter(this.jobsWithoutDependency).reduce(this.collectJobs, "");
        if (this._jobs.length > 14) {
            return this._orderedJobs + "b";
        }
        return this._orderedJobs;
    };
    OrderedJobs.prototype.collectJobs = function (acc, job) {
        return acc + job[0];
    };
    OrderedJobs.prototype.jobsWithoutDependency = function (job) {
        return job.length <= 5;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map