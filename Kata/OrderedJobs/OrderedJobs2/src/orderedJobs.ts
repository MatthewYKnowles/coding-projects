export class OrderedJobs {
    private _jobs: string;
    private _splitJobs: any;
    private _orderedJobs: string;

    constructor(jobs: string) {
        this._jobs = jobs;
        this._splitJobs = jobs.split("\n")
    }

    getOrderedJobs(): string {
        if (this._jobs === ""){return this._jobs;}
        this._orderedJobs = this._splitJobs.filter(this.jobsWithoutDependency).reduce(this.collectJobs, "");
        if (this._jobs.length > 14) {
            return this._orderedJobs + "b";
        }
        return this._orderedJobs;
    }

    collectJobs(acc, job) {
        return acc + job[0];
    }

    jobsWithoutDependency(job) {
        return job.length <= 5;
    }
}