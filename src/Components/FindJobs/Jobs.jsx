import JobCard from './JobCard';
import Sort from './Sort'
import { useEffect, useState } from 'react';
import { getAllJobs } from '../../Sercvices/JobService';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../../Slices/FilterSlice';
import { resetSort } from '../../Slices/SortSlice';

const Jobs=()=>{
    const dispatch=useDispatch();
    const [jobList,setJobList]=useState([{}]);
    const filter=useSelector((state)=>state.filter);
    const sort=useSelector((state)=>state.sort);
    const [filteredJobs,setFilteredJobs]=useState([]);
    useEffect(()=>{
        dispatch(resetFilter());
        dispatch(resetSort());
        getAllJobs().then((res)=>{
            setJobList(res.filter((job)=>job.jobStatus=="ACTIVE"));
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    useEffect(() => {
        if(sort=="Most Recent"){
            setJobList([...jobList].sort((a,b)=>new Date(b.postTime).getTime()-new Date(a.postTime).getTime()))
        }else if(sort=="Salary: Low to High"){
            setJobList([...jobList].sort((a,b)=>a.packageOffered-b.packageOffered))
        }else if(sort=="Salary: High to Low"){
            setJobList([...jobList].sort((a,b)=>b.packageOffered-a.packageOffered))
        }
    },[sort])
    useEffect(() => {
        let filterJob=jobList;
        if (filter["Job Title"] && filter["Job Title"].length > 0) {
            filterJob = filterJob.filter((job) => job.jobTitle && filter["Job Title"].some((title) => job.jobTitle.toLowerCase().includes(title.toLowerCase())));
        }
        if (filter.Location && filter.Location.length > 0) {
            filterJob = filterJob.filter((job) => job.location && filter.Location.some((location) => job.location.toLowerCase().includes(location.toLowerCase())));
        }
        if (filter.Experience && filter.Experience.length > 0) {
            filterJob = filterJob.filter((job) => filter.Experience?.some((x)=>job.experience?.toLowerCase().includes(x.toLowerCase()))

        );}
        if(filter["Job Type"]&& filter["Job Type"].length>0){
            filterJob=filterJob.filter((job)=>filter["Job Type"].some((type)=>job.jobType.toLowerCase().includes(type.toLowerCase())));
        }
        if (filter.salary && filter.salary.length > 1) {
            filterJob = filterJob.filter((job) => job.packageOffered >= filter.salary[0] && job.packageOffered <= filter.salary[1]);
        }
        setFilteredJobs(filterJob)
    },[filter,jobList])
    return(
        <div className='p-3'> 
            <div className='flex justify-between'>
                <div className='md:text-2xl font-semibold'>Recommended Jobs</div>
                <Sort sort="job"/>
            </div>
            <div className='m-5 flex flex-wrap gap-5 '>
            {
                filteredJobs.length?filteredJobs.map((job,index)=><JobCard key={index} {...job}/>): <div className='text-xl font-semibold '>No Jobs Found</div>
            }
            </div>
        </div>
    );
}
export default Jobs;