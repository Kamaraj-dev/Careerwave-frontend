import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mantine/core";
import {IconArrowLeft} from '@tabler/icons-react';
import ApplyJobComp from '../Components/ApplyJob/ApplyJobComp'
import { useEffect, useState } from "react";
import { getJob } from '../Sercvices/JobService';

const ApplyJobPage=()=>{
    const navigate=useNavigate();
    const {id}=useParams();
    const [job,setJob]=useState();
    useEffect(()=>{
        window.scrollTo(0,0);
        getJob(id).then((res)=>{
            setJob(res);
        }).catch((err)=>{
            console.log(err);
        });

    },[id]);
    return(
        <div className='p-4 mt-1'>
                <Button onClick={()=>navigate(-1)} my='md' leftSection={<IconArrowLeft size={20}/>}  color="red" variant="light" >Back</Button>
            <ApplyJobComp {...job}/>
        </div>
    );
}
export default ApplyJobPage;