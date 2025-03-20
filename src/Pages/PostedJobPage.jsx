import { useNavigate, useParams } from "react-router-dom";
import PostedJob from "../Components/PostedJob/PostedJob";
import PostedJobDesc from "../Components/PostedJob/PostedJobDesc";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobPostedBy } from "../Sercvices/JobService";


const PostedJobPage=()=>{
    const navigate=useNavigate();
    const {id}=useParams();
    const user=useSelector((state)=>state.user);
    const [jobList,setJobList]=useState([]);
    const [job,setJob]=useState({});
    useEffect(()=>{
        window.scrollTo(0,0);
        getJobPostedBy(user.id).then((res)=>{
            setJobList(res);
            if(res && res.length>0 && Number(id)==0)navigate(`/posted-job/${res[0].id}`)
            setJob(res.find((item)=>item.id==id));
        }).catch((err)=>{
            console.log(err);
        })
    },[id]);
    return(
        <div className='p-4 '>
           
            <div className='md:flex gap-5'>  
                <PostedJob job={job} jobList={jobList} />
                <PostedJobDesc {...job}/>
            </div>
        </div>
    );
}
export default PostedJobPage;