"use strict";
var OrderedJobs = (function () {
    function OrderedJobs(jobs) {
        this._jobs = jobs;
        this._splitJobs = this._jobs.split("\n");
    }
    OrderedJobs.prototype.getOrderedJobs = function () {
        this._jobs === "" ? this.noJobs() : this.orderJobs();
        return this._orderedJobs;
    };
    OrderedJobs.prototype.noJobs = function () {
        this._orderedJobs = "";
    };
    OrderedJobs.prototype.orderJobs = function () {
        this.addJobsWithNoDependencies();
        this.addJobsWithDependencies();
    };
    OrderedJobs.prototype.addJobsWithDependencies = function () {
        this._remainingJobs = this._splitJobs.filter(this.hasDependency);
        this.checkForSelfReferencingDependency();
        while (this._remainingJobs.length > 0) {
            var numberOfInitialRemainingJobs = this._remainingJobs.length;
            this.addJobsWithDependencyMet();
            this.collectRemainingJobs();
            this.checkforCircularDependency(numberOfInitialRemainingJobs);
        }
    };
    OrderedJobs.prototype.checkforCircularDependency = function (numberOfInitialRemainingJobs) {
        if (this._remainingJobs.length === numberOfInitialRemainingJobs) {
            throw new Error("Circular dependency");
        }
    };
    OrderedJobs.prototype.checkForSelfReferencingDependency = function () {
        var selfReferencingDependencies = this._remainingJobs.filter(function (job) {
            return job[0] === job[5];
        });
        if (selfReferencingDependencies.length > 0) {
            throw new Error("Self referencing dependency");
        }
    };
    OrderedJobs.prototype.collectRemainingJobs = function () {
        this._remainingJobs = this._remainingJobs.filter(this.jobsNotAdded, this);
    };
    OrderedJobs.prototype.addJobsWithDependencyMet = function () {
        this._orderedJobs = this._remainingJobs.filter(this.dependencyMet, this).reduce(this.addJob, this._orderedJobs);
    };
    OrderedJobs.prototype.jobsNotAdded = function (job) {
        return this._orderedJobs.indexOf(job[0]) === -1;
    };
    OrderedJobs.prototype.dependencyMet = function (job) {
        return this._orderedJobs.indexOf(job[5]) !== -1;
    };
    OrderedJobs.prototype.addJobsWithNoDependencies = function () {
        this._orderedJobs = this._splitJobs.filter(this.hasNoDependency).reduce(this.addJob, "");
    };
    OrderedJobs.prototype.hasDependency = function (job) {
        return job.length >= 5;
    };
    OrderedJobs.prototype.hasNoDependency = function (job) {
        return job.length < 5;
    };
    OrderedJobs.prototype.addJob = function (acc, job) {
        return acc + job[0];
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map