import {jobList} from '../../Data/jobsData';
import JobCard from '../FindJobs/JobCard';


const CompanyJob=()=>{
    return(
        <div className='mt-5 flex flex-wrap gap-5 '>
            {
                jobList.map((job,index)=><JobCard key={index} {...job}/>)
            }

        </div>
    );
}
export default CompanyJob;