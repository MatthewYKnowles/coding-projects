"use strict";
var OrderedJobs = (function () {
    function OrderedJobs() {
        this.orderedJobs = "";
    }
    OrderedJobs.prototype.jobHasDependency = function (job) {
        return job.length > 5;
    };
    OrderedJobs.prototype.orderJobs = function (jobs) {
        var orderedJobs = "";
        if (jobs === "") {
            return orderedJobs;
        }
        var splitJobs = jobs.split("\n");
        var jobsWithDependencies = splitJobs.filter(this.jobHasDependency);
        orderedJobs = splitJobs.filter(function (job) { return job.length <= 5; }).reduce(function (acc, job) { return acc + job[0]; }, "");
        splitJobs = jobsWithDependencies;
        jobsWithDependencies = [];
        while (splitJobs.length > 0) {
            var jobsLeft = splitJobs.length;
            splitJobs.map(function (job) {
                if (orderedJobs.indexOf(job[5]) >= 0) {
                    orderedJobs += job[0];
                }
                else {
                    jobsWithDependencies.push(job);
                }
            });
            splitJobs = jobsWithDependencies;
            if (splitJobs.length === jobsLeft) {
                return "error";
            }
            jobsWithDependencies = [];
        }
        return orderedJobs;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map