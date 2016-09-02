"use strict";
var OrderedJobs = (function () {
    function OrderedJobs(jobs) {
        this._jobs = jobs;
        this._splitJobs = jobs.split("\n");
        this._jobsWithDependencies = this._splitJobs.filter(this.jobsWithDependency, this);
        this.addJobsWithNoDependencies();
        this.checkForJobsWithSelfReference();
    }
    OrderedJobs.prototype.getOrderedJobs = function () {
        if (this._jobs === "") {
            return this._jobs;
        }
        if (this.jobDependsOnSelf()) {
            throw new Error("job references self");
        }
        this.populateRemainingJobsList();
        this.addJobsUntilAllJobsAreAdded();
        return this._orderedJobs;
    };
    OrderedJobs.prototype.jobDependsOnSelf = function () {
        return this._jobsWithSelfDependencies.length > 0;
    };
    OrderedJobs.prototype.checkForJobsWithSelfReference = function () {
        this._jobsWithSelfDependencies = this._jobsWithDependencies.filter(function (job) {
            return job[0] === job[5];
        });
    };
    OrderedJobs.prototype.addJobsUntilAllJobsAreAdded = function () {
        while (this._remainingJobs.length > 0) {
            var startingJobs = this._remainingJobs.length;
            this.addJobsWithMetDependencies();
            this.populateRemainingJobsList();
            if (startingJobs === this._remainingJobs.length) {
                throw new Error("circle dependency");
            }
        }
    };
    OrderedJobs.prototype.addJobsWithMetDependencies = function () {
        this._orderedJobs = this._remainingJobs.filter(this.jobDependencyMet, this).reduce(this.collectJobs, this._orderedJobs);
    };
    OrderedJobs.prototype.populateRemainingJobsList = function () {
        this._remainingJobs = this._jobsWithDependencies.filter(this.jobsNotYetUsed, this);
    };
    OrderedJobs.prototype.addJobsWithNoDependencies = function () {
        this._orderedJobs = this._splitJobs.filter(this.jobsWithoutDependency, this).reduce(this.collectJobs, "");
    };
    OrderedJobs.prototype.collectJobs = function (acc, job) {
        return acc + job[0];
    };
    OrderedJobs.prototype.jobDependencyNotMet = function (job) {
        return this._orderedJobs.indexOf(job[5]) === -1;
    };
    OrderedJobs.prototype.jobDependencyMet = function (job) {
        return this._orderedJobs.indexOf(job[5]) !== -1;
    };
    OrderedJobs.prototype.jobsNotYetUsed = function (job) {
        return this._orderedJobs.indexOf(job[0]) === -1;
    };
    OrderedJobs.prototype.jobsWithoutDependency = function (job) {
        return !this.jobHasDependency(job);
    };
    OrderedJobs.prototype.jobsWithDependency = function (job) {
        return this.jobHasDependency(job);
    };
    OrderedJobs.prototype.jobHasDependency = function (job) {
        return job.length > 5;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map