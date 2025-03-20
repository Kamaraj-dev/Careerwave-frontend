 import { Button, Divider,ActionIcon  } from '@mantine/core';
import {IconBookmark, IconBookmarkFilled  } from '@tabler/icons-react'
import { Link } from 'react-router-dom';
import { card } from '../../Data/JobDescribeData';
import DOMPurify from 'dompurify';
import { timeAgo } from '../../Sercvices/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../Slices/ProfileSlice';
import { useEffect, useState } from 'react';
import { postJob } from '../../Sercvices/JobService'
import { errorNotification, successNotification } from '../../Sercvices/NotificationService'

const JobDescribe=(props)=>{
    const data=DOMPurify.sanitize(props.description);
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const user=useSelector(state=>state.user);
    const[applied,setApplied]=useState(false);  

    const handleSaveJob = () => {
        let savedJobs = Array.isArray(profile.savedJobs) ? [...profile.savedJobs] : [];
        if (savedJobs.includes(props.id)) {
            savedJobs = savedJobs.filter((id) => id !== props.id);
            
        } else {
            savedJobs = [...savedJobs, props.id];
        }
        let updatedProfile = { ...profile, savedJobs: savedJobs };
        dispatch(changeProfile(updatedProfile));
    };
    useEffect(()=>{
        if(props.applicants?.filter((applicant)=>applicant.applicantId==user.id).length>0){
            setApplied(true); 
        }
        else setApplied(false);
    },[props])

    const handleClose=()=>{
        postJob({...props,jobStatus:"CLOSED"}).then((res)=>{
            successNotification("Success","Job Closed Successfully")
        }).catch((err)=>{
            errorNotification("Error",err.response.data.errorMessage)
        })
    }

    return(
        <div className="md:w-2/3 p-2">
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-1  '>
                        <img className='h-14 bg-gray-200 rounded-xl' src={`/Jobs/${props.company}.png`}  alt="" />
                    </div>
                    <div className=''>
                        <div className='font-semibold md:text-xl'>{props.jobTitle}</div>
                        <div className='text-sm md:text-lg'>{props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants?props.applicants.length:0} Applicants</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    {(props.edit || !applied) &&<Link to={props.edit?`/post-job/${props.id}`:`/apply-job/${props.id}`}><Button color='red' size='sm' variant='light'>{props.closed?"Reopen":props.edit?"Edit":"Apply"}</Button></Link>}
                    {!props.edit && applied&&<Button  color='green.8' size='sm' variant='light'>Applied</Button>}
                    {props.edit && !props.closed?<Button onClick={handleClose} color='red' size='sm' variant='light'>Close</Button>:Array.isArray(profile.savedJobs) && profile.savedJobs?.includes(props.id) ? 
                    <IconBookmarkFilled onClick={handleSaveJob} color='red' className='cursor-pointer hover:text-red-600' />
                 : 
                    <IconBookmark onClick={handleSaveJob} color='red' className='cursor-pointer hover:text-red-600' />
                }
                </div>
            </div>
            <Divider my={'xl'}/>
            <div className='flex justify-between '>
                {
                    card.map((item,index)=> <div key={index} className='flex flex-col items-center gap-1'>
                    <ActionIcon className='md:h-10 w-10 text-red-500 bg-red-50' variant="light" radius="xl" aria-label="Settings">
                    <item.icon className='h-4/5 w-4/5'/>
                    </ActionIcon>
                    <div className='text-xs md:text-base'>{item.name}</div>
                    <div className='text-xs md:text-base font-semibold'>{props?props[item.id]:"NA"} {item.id=="packageOffered"&&<>LPA</>}</div>
                    </div> )
                }
                
            </div>
            <Divider my={'xl'}/>
            <div className='md:text-xl font-semibold mb-5'>Required Skill</div>
            <div className='flex flex-wrap gap-2'>
                {
                    props?.skillsRequired?.map((item,index)=>
                        <ActionIcon key={index} className='!w-fit !h-fit md:text-lg font-medium text-red-500 bg-red-50' p={'xs'} variant="light" radius="xl" aria-label="Settings"> {item} </ActionIcon>
                    )
                }
                
            </div>
            <Divider my={'xl'}/>
            <div className='mb-2 [&_h4]:text-xl [&_h4]:my-5 [&_*]:text-gray-800 [&_li]:marker:text-red-500 [&_h4]:font-medium [&_p]:text-justify'>
                <div className='md:text-xl font-semibold mb-5'>About job</div>
                <div className='flex flex-wrap gap-2'>
                {props.about}</div>
            </div>
            <Divider my={'xl'}/>
            <div className='mb-2 [&_h4]:text-xl [&_h4]:my-5 [&_*]:text-gray-800 [&_li]:marker:text-red-500 [&_h4]:font-medium [&_p]:text-justify'>
                <div className='md:text-xl font-semibold mb-5'>Description</div>
                <div className='flex flex-wrap gap-2'>
                {props.description}</div>
            </div>
            <Divider my={'xl'}/>
            <div>
                <div className='md:text-xl font-semibold mb-3'>About the Company</div>
                <div>
                <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-3 bg-gray-200 rounded-xl'>
                        <img className='h-8 ' src={`/Jobs/${props.company}.png`}  alt="" />
                    </div>
                    <div className=''>
                        <div className='font-semibold md:text-xl'>{props.company}</div>
                        <div className='md:text-lg'>10k+ Employees</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <Link to={`/company/${props.company}`} ><Button color='red' className='text-xs md:text-base' variant='light'>Company Page</Button></Link>
                </div>
                
                </div>
                    <div className='text-gray-700 mt-3 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi quasi soluta ad non reiciendis vero tempore perspiciatis eum maxime iure, atque adipisci laboriosam magnam quidem fugit fugiat eaque eius?
                    </div>
                </div>
            </div>
        </div>
    );
}
export default JobDescribe;
