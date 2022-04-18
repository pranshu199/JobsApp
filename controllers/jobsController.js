const createJob = (req, res)=>{
    res.send("create job");
}
const deleteJob = (req, res)=>{
    res.send("delete job");
}
const getAllJobs = (req, res)=>{
    res.send("getAllJobs job");
}
const updateJobs = (req, res)=>{
    res.send("update job");
}
const showStats = (req, res)=>{
    res.send("Show Stats job");
}


export {createJob, deleteJob, getAllJobs, updateJobs, showStats}