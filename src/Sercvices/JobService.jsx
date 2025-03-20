import axiosInstance from "../Interceptor/AxiosInterceptor";

const base_url="http://localhost:8080/jobs/"

const postJob=async(job)=>{
    return axiosInstance.post(`/jobs/post`,job)
    .then(result=>result.data)
    .catch(error=>{throw error;})
}
const getAllJobs=async()=>{
    return axiosInstance.get(`/jobs/getAll`)
    .then(result=>result.data)
    .catch(error=>{throw error;})
}
const getJob=async(id)=>{
    return axiosInstance.get(`/jobs/get/${id}`)
    .then(result=>result.data)
    .catch(error=>{throw error;})
}
const applyJob=async(id,application)=>{
    return axiosInstance.post(`/jobs/apply/${id}`,application)
    .then(result=>result.data)
    .catch(error=>{throw error;})
}
const getJobPostedBy=async(id)=>{
    return axiosInstance.get(`/jobs/postedBy/${id}`)
    .then(result=>result.data)
    .catch(error=>{throw error;})
}
const changeAppStatus=async(application)=>{
    return axiosInstance.post(`/jobs/changeAppStatus`,application)
    .then(result=>result.data)
    .catch(error=>{throw error;})
}

export{postJob,getAllJobs,getJob,applyJob,getJobPostedBy,changeAppStatus};