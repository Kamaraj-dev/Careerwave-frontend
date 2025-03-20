import {IconBriefcase, IconMapPin} from '@tabler/icons-react'
import {Avatar, Button,Divider } from '@mantine/core';
import ExpCard from './ExpCard';
import CertCard from './CertCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProfile } from '../../Sercvices/ProfileService';

const Profile=()=>{
    const {id}=useParams();
    const [profile,setProfile]=useState({});
    useEffect(()=>{
        window.scrollTo(0,0);
        getProfile(id).then((res)=>{
            setProfile(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])
    return(
        
        <div className="md:w-2/3">
            <div className="relative">
                <img className="rounded-t-2xl " src={"/Profile/Profile.png"} alt="" />
                <div className='absolute flex  items-center justify-center top-1/2 left-3 '>
                <Avatar className=' w-24 h-24 md:!w-36 md:!h-36 border-black border-2' src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:'/img/avatar.png'}/>
                </div>
                
            </div>
            <div className="p-3 mt-16">
                <div className='text-lg md:text-2xl font-semibold flex justify-between'>{profile?.name}<Button color='red' variant="light" >Message</Button></div>
                <div className='text-base md:text-xl flex gap-1 items-center'><IconBriefcase/>{profile?.jobTitle}  &bull; {profile?.company} </div>
                <div className='flex  md:text-lg text-gray-600 items-center'><IconMapPin className='h-4 w-4 mr-2'/>{profile?.location} </div>
                <div className='flex  md:text-lg text-gray-600 items-center'><IconBriefcase className='h-4 w-4 mr-2'/>Experience: {profile?.totalExp} Years </div>
            </div>
            <Divider size="xs" my="lg" />
            <div className="px-3">
                <div className='md:text-2xl font-semibold mb-3'>About</div>
                <div className='md:text-xl text-justify'>{profile?.about}</div>
            </div>
            <Divider size="xs" my="lg" />
            <div className="px-3">
                <div className='md:text-2xl font-semibold mb-3'>Skills</div>
                <div className='flex flex-wrap gap-2'>
                    {
                        profile?.skills?.map((skill, index)=><div key={index} className='bg-red-800 bg-opacity-15 text-sm md:text-lg font-medium py-1 px-3 rounded-2xl'>{skill}</div>
                        )
                    }
                </div>
            </div>
            <Divider size="xs" my="lg" />
            <div className="px-3">
                <div className='md:text-2xl font-semibold mb-5'>Experience</div>
                <div className='flex flex-col gap-8'>
                {
                    profile?.experiences?.map((exp, index)=><ExpCard key={index} {...exp}/> )
                }

                </div>
                
            </div>
            <Divider size="xs" my="lg" />
            <div className="px-3">
                <div className='md:text-2xl font-semibold mb-5'>Certification</div>
                <div className='flex flex-col gap-8'>
                {
                    profile?.certifications?.map((certi, index)=><CertCard key={index} {...certi}/> )
                }
                </div>
                
            </div>

        </div>
    );
}
export default Profile;