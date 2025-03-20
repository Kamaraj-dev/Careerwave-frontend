
import { Divider,Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link, useNavigate } from "react-router-dom";
import Profile from '../Components/TalentProfile/Profile';
import { profile } from '../Data/TalentData';
import RecommendTalent from '../Components/TalentProfile/RecommendTalent';
import { useEffect, useState } from 'react';
import { getAllProfiles } from '../Sercvices/ProfileService';


const TalentProfile=()=>{
    const navigate=useNavigate();
    const [talents,setTalents]=useState([]);
    useEffect(()=>{
        getAllProfiles().then((res)=>{
            setTalents(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <div className='p-4'>
        
            <Button onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20}/>}  color="red" variant="light" >Back</Button>
            <Divider size="xs" />
            <div className='md:flex  gap-5'>
            <Profile  />
            <RecommendTalent talents={talents}/>
            </div>


        </div>
    );
}
export default TalentProfile;