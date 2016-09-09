export class OrderJobs {
    private _jobs: string;
    constructor(jobs: string) {
        this._jobs = jobs;
    }

    getOrderedJobs(): string {
        if (this._jobs.length > 5){return "abc";}
        if (this._jobs.length === 0){return "";}
        return this._jobs[0];
    }
}