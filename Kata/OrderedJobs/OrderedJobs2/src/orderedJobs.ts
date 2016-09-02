export class OrderedJobs {
    private _jobs: string;
    private _splitJobs: any;
    private _orderedJobs: string;
    private _jobsWithDependencies: any;
    private _remainingJobs: any;
    private _jobsWithSelfDependencies: any;

    constructor(jobs: string) {
        this._jobs = jobs;
        this._splitJobs = jobs.split("\n");
        this._jobsWithDependencies = this._splitJobs.filter(this.jobsWithDependency, this);
        this.addJobsWithNoDependencies();
        this.checkForJobsWithSelfReference();
    }

    getOrderedJobs(): string {
        if (this._jobs === ""){return this._jobs;}
        if (this.jobDependsOnSelf()){throw new Error("job references self")}
        this.populateRemainingJobsList();
        this.addJobsUntilAllJobsAreAdded();
        return this._orderedJobs;
    }

    private jobDependsOnSelf() {
        return this._jobsWithSelfDependencies.length > 0;
    }

    private checkForJobsWithSelfReference() {
        this._jobsWithSelfDependencies = this._jobsWithDependencies.filter((job)=> {
            return job[0] === job[5]
        });
    }

    private addJobsUntilAllJobsAreAdded() {
        while (this._remainingJobs.length > 0) {
            let startingJobs: number = this._remainingJobs.length;
            this.addJobsWithMetDependencies();
            this.populateRemainingJobsList();
            if (startingJobs === this._remainingJobs.length){
                throw new Error("circle dependency");
            }
        }
    }

    private addJobsWithMetDependencies() {
        this._orderedJobs = this._remainingJobs.filter(this.jobDependencyMet, this).reduce(this.collectJobs, this._orderedJobs);
    }

    private populateRemainingJobsList() {
        this._remainingJobs = this._jobsWithDependencies.filter(this.jobsNotYetUsed, this);
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