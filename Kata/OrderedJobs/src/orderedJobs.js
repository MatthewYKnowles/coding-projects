"use strict";
var OrderedJobs = (function () {
    function OrderedJobs() {
    }
    OrderedJobs.prototype.orderJobs = function (jobs) {
        var orderedJobs = "";
        if (jobs === "") {
            return orderedJobs;
        }
        var unusedJobs = [];
        var splitJobs = jobs.split("\n");
        for (var i = 0; i < splitJobs.length; i++) {
            if (this.hasDependency(splitJobs[i])) {
                this.settleDependency(orderedJobs, splitJobs[i], unusedJobs);
            }
            else {
                orderedJobs += splitJobs[i][0];
            }
        }
        console.log(unusedJobs);
        if (unusedJobs.length > 0) {
            for (var i = 0; i < unusedJobs.length; i++) {
                orderedJobs += unusedJobs[i][0];
            }
        }
        return orderedJobs;
    };
    OrderedJobs.prototype.settleDependency = function (orderedJobs, splitJob, unusedJobs) {
        if (this.alreadyHasDependency(orderedJobs, splitJob)) {
            orderedJobs += splitJob[0];
        }
        else {
            unusedJobs.push(splitJob);
        }
        return orderedJobs;
    };
    OrderedJobs.prototype.hasDependency = function (splitJobs) {
        return splitJobs.length > 5;
    };
    OrderedJobs.prototype.alreadyHasDependency = function (orderedJobs, splitJob) {
        return orderedJobs.indexOf(splitJob[5]) >= 0;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map