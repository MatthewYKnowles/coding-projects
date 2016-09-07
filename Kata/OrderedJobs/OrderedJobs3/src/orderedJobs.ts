export class OrderedJobs {
    private _jobs: string;
    private _orderedJobs: string;
    private _splitJobs: any;
    private _remainingJobs: any;

    constructor(jobs: string) {
        this._jobs = jobs;
        this._splitJobs = this._jobs.split("\n");
    }
    getOrderedJobs(): string {
        this._jobs === "" ? this.noJobs(): this.orderJobs();
        return this._orderedJobs;
    }

    private noJobs() {
        this._orderedJobs = "";
    }

    private orderJobs() {
        this.addJobsWithNoDependencies();
        this.addJobsWithDependencies();
    }

    private addJobsWithDependencies() {
        this._remainingJobs = this._splitJobs.filter(this.hasDependency);
        this.checkForSelfReferencingDependency();
        while(this._remainingJobs.length > 0){
            let numberOfInitialRemainingJobs = this._remainingJobs.length;
            this.addJobsWithDependencyMet();
            this.collectRemainingJobs();
            this.checkforCircularDependency(numberOfInitialRemainingJobs);
        }
    }

    private checkforCircularDependency(numberOfInitialRemainingJobs: any) {
        if (this._remainingJobs.length === numberOfInitialRemainingJobs) {
            throw new Error("Circular dependency")
        }
    }

    private checkForSelfReferencingDependency() {
        let selfReferencingDependencies = this._remainingJobs.filter((job)=> {
            return job[0] === job[5]
        });
        if (selfReferencingDependencies.length > 0) {
            throw new Error("Self referencing dependency")
        }
    }

    private collectRemainingJobs() {
        this._remainingJobs = this._remainingJobs.filter(this.jobsNotAdded, this);
    }

    private addJobsWithDependencyMet() {
        this._orderedJobs = this._remainingJobs.filter(this.dependencyMet, this).reduce(this.addJob, this._orderedJobs);
    }

    private jobsNotAdded(job): any {
        return this._orderedJobs.indexOf(job[0]) === -1;
    }

    private dependencyMet(job): any {
        return this._orderedJobs.indexOf(job[5]) !== -1;
    }

    private addJobsWithNoDependencies() {
        this._orderedJobs = this._splitJobs.filter(this.hasNoDependency).reduce(this.addJob, "");
    }

    private hasDependency(job): any {
        return job.length >= 5;
    }

    private hasNoDependency(job): any {
        return job.length < 5;
    }

    private addJob(acc, job): string {
        return acc + job[0]
    }
}