"use strict";
var OrderedJobs = (function () {
    function OrderedJobs(jobs) {
        this._jobs = jobs;
        this._splitJobs = jobs.split("\n");
        this._jobsWithDependencies = this._splitJobs.filter(this.jobsWithDependency, this);
    }
    OrderedJobs.prototype.getOrderedJobs = function () {
        if (this._jobs === "") {
            return this._jobs;
        }
        this.addJobsWithNoDependencies();
        this.extractRemainingJobsAndAddJobsWithDependenciesMet();
        this.extractRemainingJobsAndAddJobsWithDependenciesMet();
        this.extractRemainingJobsAndAddJobsWithDependenciesMet();
        return this._orderedJobs;
    };
    OrderedJobs.prototype.extractRemainingJobsAndAddJobsWithDependenciesMet = function () {
        this._remainingJobs = this._jobsWithDependencies.filter(this.jobsNotYetUsed, this);
        this._orderedJobs = this._remainingJobs.filter(this.jobDependencyMet, this).reduce(this.collectJobs, this._orderedJobs);
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
        console.log(this._orderedJobs.indexOf(job[5]) !== -1 + " hit");
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