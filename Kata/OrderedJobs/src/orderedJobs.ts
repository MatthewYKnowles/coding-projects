export class OrderedJobs {
    orderedJobs: string = "";

    orderJobs(jobs: string): string {
        let orderedJobs: string = "";
        if (jobs === ""){return orderedJobs;}
        let unusedJobs = [];
        let splitJobs: any = jobs.split("\n");
        splitJobs.map(function(job){
            if (job.length > 5){
                unusedJobs.push(job);
            }
            else {
                orderedJobs += job[0];
            }
        });
        splitJobs = unusedJobs;
        unusedJobs = [];
        while (splitJobs.length > 0) {
            let jobsLeft = splitJobs.length;
            splitJobs.map(function(job) {
                if (orderedJobs.indexOf(job[5]) >= 0){
                    orderedJobs += job[0];
                } else {
                    unusedJobs.push(job);
                }
            });
            splitJobs = unusedJobs;
            if (splitJobs.length === jobsLeft){
                return "error";
            }
            unusedJobs = [];
        }
        return orderedJobs;
    }

}