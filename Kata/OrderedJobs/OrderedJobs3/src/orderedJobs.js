"use strict";
var OrderedJobs = (function () {
    function OrderedJobs(jobs) {
        this._jobs = jobs;
    }
    OrderedJobs.prototype.getOrderedJobs = function () {
        this._jobs === "" ? this.noJobs() : this.orderJobs();
        return this._orderedJobs;
    };
    OrderedJobs.prototype.noJobs = function () {
        this._orderedJobs = "";
    };
    OrderedJobs.prototype.orderJobs = function () {
        var splitJobs = ;
        if (this._jobs.length > 5) {
            this._orderedJobs = "abc";
        }
        else {
            this._orderedJobs = this._jobs[0];
        }
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map