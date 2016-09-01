export class OrderedJobs {

    orderJobs(jobs: string): string {
        let orderedJobs: string = "";
        if (jobs === ""){return orderedJobs;}
        let unusedJobs = [];
        let splitJobs: any = jobs.split("\n");
        for (let i = 0; i < splitJobs.length; i++){
            if (this.hasDependency(splitJobs[i])) {
                this.settleDependency(orderedJobs, splitJobs[i], unusedJobs);
            } else {
                orderedJobs += splitJobs[i][0];
            }
        }
        console.log(unusedJobs);
        if (unusedJobs.length > 0) {
            for (let i = 0; i < unusedJobs.length; i++){
                orderedJobs += unusedJobs[i][0];
            }
        }
        return orderedJobs;
    }

    private settleDependency(orderedJobs: string, splitJob, unusedJobs: Array) {
        if (this.alreadyHasDependency(orderedJobs, splitJob)) {
            orderedJobs += splitJob[0];
        } else {
            unusedJobs.push(splitJob);
        }
        return orderedJobs;
    }

    private hasDependency(splitJobs: string) {
        return splitJobs.length > 5;
    }

    private alreadyHasDependency(orderedJobs: string, splitJob: string) {
        return orderedJobs.indexOf(splitJob[5]) >= 0;
    }
}