"use strict";
var OrderedJobs = (function () {
    function OrderedJobs() {
        this.orderedJobs = "";
    }
    OrderedJobs.prototype.orderJobs = function (jobs) {
        var orderedJobs = "";
        if (jobs === "") {
            return orderedJobs;
        }
        var unusedJobs = [];
        var splitJobs = jobs.split("\n");
        splitJobs.map(function (job) {
            if (job.length > 5) {
                unusedJobs.push(job);
            }
            else {
                orderedJobs += job[0];
            }
        });
        splitJobs = unusedJobs;
        unusedJobs = [];
        while (splitJobs.length > 0) {
            var jobsLeft = splitJobs.length;
            splitJobs.map(function (job) {
                if (orderedJobs.indexOf(job[5]) >= 0) {
                    orderedJobs += job[0];
                }
                else {
                    unusedJobs.push(job);
                }
            });
            splitJobs = unusedJobs;
            if (splitJobs.length === jobsLeft) {
                return "error";
            }
            unusedJobs = [];
        }
        return orderedJobs;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map