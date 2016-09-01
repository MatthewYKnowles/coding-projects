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
        splitJobs = unusedJobs;
        console.log(splitJobs);
        if (unusedJobs.length > 0) {
            for (var i = 0; i < splitJobs.length; i++) {
                if (!this.alreadyHasDependency(orderedJobs, splitJobs[i])) {
                    unusedJobs.push(splitJobs[i]);
                }
                else {
                    orderedJobs += splitJobs[i][0];
                }
            }
        }
        return orderedJobs;
    };
    OrderedJobs.prototype.settleDependency = function (orderedJobs, splitJob, unusedJobs) {
        if (!this.alreadyHasDependency(orderedJobs, splitJob)) {
            unusedJobs.push(splitJob);
        }
    };
    OrderedJobs.prototype.hasDependency = function (splitJobs) {
        return splitJobs.length > 5;
    };
    OrderedJobs.prototype.alreadyHasDependency = function (orderedJobs, splitJob) {
        console.log(orderedJobs.indexOf(splitJob[5]) + " " + splitJob[5]);
        return orderedJobs.indexOf(splitJob[5]) >= 0;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map