export class OrderedJobs {
    orderedJobs: string = "";

    jobHasDependency(job) {
        return job.length > 5;
    }

    orderJobs(jobs: string): string {
        let orderedJobs: string = "";
        if (jobs === ""){return orderedJobs;}
        let splitJobs: any = jobs.split("\n");
        let jobsWithDependencies = splitJobs.filter(this.jobHasDependency);

        orderedJobs = splitJobs.filter((job) => {return job.length <= 5;}).reduce((acc, job) => {return acc + job[0];}, "");
        splitJobs = jobsWithDependencies;
        jobsWithDependencies = [];
        while (splitJobs.length > 0) {
            let jobsLeft = splitJobs.length;
            splitJobs.map(function(job) {
                if (orderedJobs.indexOf(job[5]) >= 0){
                    orderedJobs += job[0];
                } else {
                    jobsWithDependencies.push(job);
                }
            });
            splitJobs = jobsWithDependencies;
            if (splitJobs.length === jobsLeft){return "error";}
            jobsWithDependencies = [];
        }
        return orderedJobs;
    }
}