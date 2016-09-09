export class OrderJobs {
    private _jobs: string;
    private _orderedJobs: string;
    private _splitJobs: string[];
    private _remainingJobs: string[];
    constructor(jobs: string) {
        this._jobs = jobs;
        this._splitJobs = this._jobs.split("\n");
    }

    getOrderedJobs(): string {

        this._jobs === "" ? this.noJobs() : this.orderJobs();
        return this._orderedJobs;
    }

    private noJobs() {
        return this._orderedJobs = "";
    }

    private orderJobs(): void {
        this.addJobsWithNoDependencies();
        this.addJobsWithDependencies();

    }

    private addJobsWithDependencies() {
        this.collectJobsWithDependencies();
        this.checkForSelfDependency();
        while (this._remainingJobs.length > 0){
            let jobsLeft = this._remainingJobs.length;
            this.addJobsWithDependencyMet();
            this.collectUnusedJobs();
            this.checkForEndlessLoop(jobsLeft);
        }
    }

    private checkForEndlessLoop(jobsLeft: number) {
        if (this._remainingJobs.length === jobsLeft) {
            throw new Error("endless loop")
        }
    }

    private checkForSelfDependency() {
        if (this._remainingJobs.length > 0 && this._remainingJobs[0][0] === this._remainingJobs[0][5]) {
            throw new Error("self referencing dependency");
        }
    }

    private collectJobsWithDependencies() {
        this._remainingJobs = this._splitJobs.filter(this.hasDependencies);
    }

    private collectUnusedJobs() {
        this._remainingJobs = this._remainingJobs.filter(this.jobsNotAdded, this);
    }

    private addJobsWithDependencyMet() {
        this._orderedJobs = this._remainingJobs.filter(this.dependencyMet, this).reduce(this.addJob, this._orderedJobs);
    }

    private addJobsWithNoDependencies() {
        this._orderedJobs = this._splitJobs.filter(this.noDepencencies).reduce(this.addJob, "");
    }

    private addJob(acc, job): string {
        return acc + job[0];
    }

    private noDepencencies(job) {
        return job.length < 6;
    }

    private hasDependencies(job) {
        return job.length === 6;
    }

    private dependencyMet(job) {
        return this._orderedJobs.indexOf(job[5]) !== -1;
    }

    private jobsNotAdded(job) {
        return this._orderedJobs.indexOf(job[0]) === -1;
    }
}