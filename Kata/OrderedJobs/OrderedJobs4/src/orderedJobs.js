"use strict";
var OrderJobs = (function () {
    function OrderJobs(jobs) {
        this._jobs = jobs;
        this._splitJobs = this._jobs.split("\n");
    }
    OrderJobs.prototype.getOrderedJobs = function () {
        this._jobs === "" ? this.noJobs() : this.orderJobs();
        return this._orderedJobs;
    };
    OrderJobs.prototype.noJobs = function () {
        return this._orderedJobs = "";
    };
    OrderJobs.prototype.orderJobs = function () {
        this.addJobsWithNoDependencies();
        this.addJobsWithDependencies();
    };
    OrderJobs.prototype.addJobsWithDependencies = function () {
        this.collectJobsWithDependencies();
        this.checkForSelfDependency();
        while (this._remainingJobs.length > 0) {
            var jobsLeft = this._remainingJobs.length;
            this.addJobsWithDependencyMet();
            this.collectUnusedJobs();
            this.checkForEndlessLoop(jobsLeft);
        }
    };
    OrderJobs.prototype.checkForEndlessLoop = function (jobsLeft) {
        if (this._remainingJobs.length === jobsLeft) {
            throw new Error("endless loop");
        }
    };
    OrderJobs.prototype.checkForSelfDependency = function () {
        if (this._remainingJobs.length > 0 && this._remainingJobs[0][0] === this._remainingJobs[0][5]) {
            throw new Error("self referencing dependency");
        }
    };
    OrderJobs.prototype.collectJobsWithDependencies = function () {
        this._remainingJobs = this._splitJobs.filter(this.hasDependencies);
    };
    OrderJobs.prototype.collectUnusedJobs = function () {
        this._remainingJobs = this._remainingJobs.filter(this.jobsNotAdded, this);
    };
    OrderJobs.prototype.addJobsWithDependencyMet = function () {
        this._orderedJobs = this._remainingJobs.filter(this.dependencyMet, this).reduce(this.addJob, this._orderedJobs);
    };
    OrderJobs.prototype.addJobsWithNoDependencies = function () {
        this._orderedJobs = this._splitJobs.filter(this.noDepencencies).reduce(this.addJob, "");
    };
    OrderJobs.prototype.addJob = function (acc, job) {
        return acc + job[0];
    };
    OrderJobs.prototype.noDepencencies = function (job) {
        return job.length < 6;
    };
    OrderJobs.prototype.hasDependencies = function (job) {
        return job.length === 6;
    };
    OrderJobs.prototype.dependencyMet = function (job) {
        return this._orderedJobs.indexOf(job[5]) !== -1;
    };
    OrderJobs.prototype.jobsNotAdded = function (job) {
        return this._orderedJobs.indexOf(job[0]) === -1;
    };
    return OrderJobs;
}());
exports.OrderJobs = OrderJobs;
//# sourceMappingURL=orderedJobs.js.map