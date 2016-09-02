export class OrderedJobs {
    private _jobs: string;
    private _splitJobs: any;
    private _orderedJobs: string;
    private _jobsWithDependencies: any;
    private _remainingJobs: any;

    constructor(jobs: string) {
        this._jobs = jobs;
        this._splitJobs = jobs.split("\n");
        this._jobsWithDependencies = this._splitJobs.filter(this.jobsWithDependency, this);

    }

    getOrderedJobs(): string {
        if (this._jobs === ""){return this._jobs;}
        this.addJobsWithNoDependencies();
        this.extractRemainingJobsAndAddJobsWithDependenciesMet();
        this.extractRemainingJobsAndAddJobsWithDependenciesMet();
        this.extractRemainingJobsAndAddJobsWithDependenciesMet();
        return this._orderedJobs;
    }

    private extractRemainingJobsAndAddJobsWithDependenciesMet() {
        this._remainingJobs = this._jobsWithDependencies.filter(this.jobsNotYetUsed, this);
        this._orderedJobs = this._remainingJobs.filter(this.jobDependencyMet, this).reduce(this.collectJobs, this._orderedJobs);
    }

    private addJobsWithNoDependencies() {
        this._orderedJobs = this._splitJobs.filter(this.jobsWithoutDependency, this).reduce(this.collectJobs, "");
    }

    collectJobs(acc, job) {
        return acc + job[0];
    }

    jobDependencyNotMet(job) {
        return this._orderedJobs.indexOf(job[5]) === -1;
    }
    jobDependencyMet(job) {
        console.log(this._orderedJobs.indexOf(job[5]) !== -1 + " hit");
        return this._orderedJobs.indexOf(job[5]) !== -1;
    }
    jobsNotYetUsed(job) {
        return this._orderedJobs.indexOf(job[0]) === -1;
    }

    jobsWithoutDependency(job) {
        return !this.jobHasDependency(job);
    }
    jobsWithDependency(job) {
        return this.jobHasDependency(job);
    }
    jobHasDependency(job) {
        return job.length > 5;
    }
}