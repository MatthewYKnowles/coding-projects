export class OrderJobs {
    private _jobs: string;
    private _splitJobs: string[];
    private _orderedJobs: string;
    private _jobsNotAdded: string[];
    private _numberOfJobsBeforeDependencyCheck: number;

    constructor(jobs: string){
        this._jobs = jobs;
        this._splitJobs = jobs.split("\n");
    }

    getOrderedJobs(): string {
        if (this._jobs === ""){return "";}
        this.orderJobs();
        return this._orderedJobs;
    }

    private orderJobs() {
        this.addJobsWithoutDependency();
        this.addJobsWithDependencies();
    }

    private addJobsWithDependencies() {
        this.collectAllJobsWithDependencies();
        this.checkForJobReferencingSelf();
        this.resolveDependencies();
    }

    private resolveDependencies() {
        while (this.jobsRemain()) {
            this.countRemainingJobs();
            this.addJobsWithDependencyMet();
            this.collectRemainingJobs();
            this.checkForCircularDependency();
        }
    }

    private countRemainingJobs() {
        this._numberOfJobsBeforeDependencyCheck = this._jobsNotAdded.length;
    }

    private jobsRemain() {
        return this._jobsNotAdded.length > 0;
    }

    private checkForCircularDependency() {
        if (this._jobsNotAdded.length === this._numberOfJobsBeforeDependencyCheck) {
            throw new Error("circular dependency")
        }
    }

    private checkForJobReferencingSelf() {
        let selfDependency = this._jobsNotAdded.filter((job) => {
            return job[0] === job[5]
        });
        if (selfDependency.length > 0) {
            throw new Error("Job can not depend on itself");
        }
    }

    private collectAllJobsWithDependencies() {
        this._jobsNotAdded = this._splitJobs.filter(this.jobWithDependency);
    }

    private collectRemainingJobs() {
        this._jobsNotAdded = this._jobsNotAdded.filter(this.jobNotAdded, this);
    }

    private addJobsWithDependencyMet() {
        this._orderedJobs = this._jobsNotAdded.filter(this.jobDependencyMet, this).reduce(this.addJobs, this._orderedJobs);
    }

    private jobNotAdded(job): any {
        return this._orderedJobs.indexOf(job[0]) === -1;
    }

    private jobDependencyMet(job): any {
        return this._orderedJobs.indexOf(job[5]) > -1;
    }

    private addJobsWithoutDependency() {
        this._orderedJobs = this._splitJobs.filter(this.jobHasNoDependency).reduce(this.addJobs, "");
    }

    private jobWithDependency(job): any {
        return job.length === 6;
    }

    private jobHasNoDependency(job): any {
        return job.length < 6;
    }

    private addJobs(acc, job): string {
        return acc + job[0];
    }
}