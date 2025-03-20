
import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link, useParams } from "react-router-dom";
import JobDescribe from '../Components/JobDescribe/JobDescribe';
import RecommendedJob from '../Components/JobDescribe/RecommandedJob';
import {  useEffect, useState } from 'react';
import { getJob } from '../Sercvices/JobService';

const JobDescribePage=()=>{
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
        <div className='p-4'>
            
            <Link className='my-5 inline-block' to="/Find-Job">
                <Button leftSection={<IconArrowLeft size={20}/>}  color="red" variant="light" >Back</Button>
            </Link>
            
            <div className='md:flex justify-around gap-5'>
                <JobDescribe {...job}/>
                <RecommendedJob/>
            </div>


        </div>
    );
}
export default JobDescribePage;