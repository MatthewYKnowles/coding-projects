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
        splitJobs = unusedJobs;
        console.log(splitJobs);
        if (unusedJobs.length > 0) {
            for (let i = 0; i < splitJobs.length; i++){
                if (!this.alreadyHasDependency(orderedJobs, splitJobs[i])) {
                    unusedJobs.push(splitJobs[i]);
                } else {
                    orderedJobs += splitJobs[i][0];
                }
            }
        }
        return orderedJobs;
    }

    private settleDependency(orderedJobs: string, splitJob, unusedJobs: Array) {
        if (!this.alreadyHasDependency(orderedJobs, splitJob)) {
            unusedJobs.push(splitJob);
        }
    }

    private hasDependency(splitJobs: string) {
        return splitJobs.length > 5;
    }

    private alreadyHasDependency(orderedJobs: string, splitJob: string) {
        console.log(orderedJobs.indexOf(splitJob[5]) + " " + splitJob[5]);
        return orderedJobs.indexOf(splitJob[5]) >= 0;
    }
}