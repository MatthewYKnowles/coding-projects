"use strict";
var OrderJobs = (function () {
    function OrderJobs(jobs) {
        this._jobs = jobs;
        this._splitJobs = jobs.split("\n");
    }
    OrderJobs.prototype.getOrderedJobs = function () {
        if (this._jobs === "") {
            return "";
        }
        this.orderJobs();
        return this._orderedJobs;
    };
    OrderJobs.prototype.orderJobs = function () {
        this.addJobsWithoutDependency();
        this.addJobsWithDependencies();
    };
    OrderJobs.prototype.addJobsWithDependencies = function () {
        this.collectAllJobsWithDependencies();
        this.checkForJobReferencingSelf();
        this.resolveDependencies();
    };
    OrderJobs.prototype.resolveDependencies = function () {
        while (this.jobsRemain()) {
            this.countRemainingJobs();
            this.addJobsWithDependencyMet();
            this.collectRemainingJobs();
            this.checkForCircularDependency();
        }
    };
    OrderJobs.prototype.countRemainingJobs = function () {
        this._numberOfJobsBeforeDependencyCheck = this._jobsNotAdded.length;
    };
    OrderJobs.prototype.jobsRemain = function () {
        return this._jobsNotAdded.length > 0;
    };
    OrderJobs.prototype.checkForCircularDependency = function () {
        if (this._jobsNotAdded.length === this._numberOfJobsBeforeDependencyCheck) {
            throw new Error("circular dependency");
        }
    };
    OrderJobs.prototype.checkForJobReferencingSelf = function () {
        var selfDependency = this._jobsNotAdded.filter(function (job) {
            return job[0] === job[5];
        });
        if (selfDependency.length > 0) {
            throw new Error("Job can not depend on itself");
        }
    };
    OrderJobs.prototype.collectAllJobsWithDependencies = function () {
        this._jobsNotAdded = this._splitJobs.filter(this.jobWithDependency);
    };
    OrderJobs.prototype.collectRemainingJobs = function () {
        this._jobsNotAdded = this._jobsNotAdded.filter(this.jobNotAdded, this);
    };
    OrderJobs.prototype.addJobsWithDependencyMet = function () {
        this._orderedJobs = this._jobsNotAdded.filter(this.jobDependencyMet, this).reduce(this.addJobs, this._orderedJobs);
    };
    OrderJobs.prototype.jobNotAdded = function (job) {
        return this._orderedJobs.indexOf(job[0]) === -1;
    };
    OrderJobs.prototype.jobDependencyMet = function (job) {
        return this._orderedJobs.indexOf(job[5]) > -1;
    };
    OrderJobs.prototype.addJobsWithoutDependency = function () {
        this._orderedJobs = this._splitJobs.filter(this.jobHasNoDependency).reduce(this.addJobs, "");
    };
    OrderJobs.prototype.jobWithDependency = function (job) {
        return job.length === 6;
    };
    OrderJobs.prototype.jobHasNoDependency = function (job) {
        return job.length < 6;
    };
    OrderJobs.prototype.addJobs = function (acc, job) {
        return acc + job[0];
    };
    return OrderJobs;
}());
exports.OrderJobs = OrderJobs;
//# sourceMappingURL=orderedJobs.js.map