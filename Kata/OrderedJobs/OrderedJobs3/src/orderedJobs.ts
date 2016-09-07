export class OrderedJobs {
    private _jobs: string;
    private _orderedJobs: string;

    constructor(jobs: string) {
        this._jobs = jobs;
    }
    getOrderedJobs(): string {
        this._jobs === "" ? this.noJobs(): this.orderJobs();
        return this._orderedJobs;
    }

    private noJobs() {
        this._orderedJobs = "";
    }

    private orderJobs() {
        let splitJobs =
        if (this._jobs.length > 5){
            this._orderedJobs = "abc";
        }
        else {
            this._orderedJobs = this._jobs[0];
        }
    }
}