import { useParams } from "react-router-dom";
import JobCard from "../FindJobs/JobCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Sercvices/JobService";



const RecommendedJob=()=>{
    const {id}=useParams();
    const [jobList,setJobList]=useState([{}]);
    useEffect(()=>{
        getAllJobs().then((res)=>{
            setJobList(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(<div className="md:w-1/3 p-2">
        <div className="md:text-xl font-semibold mt-3 mb-5">Recommended Jobs</div>
        <div className="flex flex-col flex-wrap gap-5 ">
            {jobList?.map((job,index)=>index<6 && id!=job.id && <JobCard key={index} {...job}/>)}
        </div>

    </div>
    );

}
export default RecommendedJob;