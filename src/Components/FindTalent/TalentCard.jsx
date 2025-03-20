import {IconCalendarMonth, IconHeart, IconMapPin  } from '@tabler/icons-react';
import { Text,Divider, Avatar,Button,Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'
import { DateInput,TimeInput } from '@mantine/dates';
import {  Link, useParams } from "react-router-dom";
import { useState,useRef, useEffect } from 'react';
import { getProfile } from '../../Sercvices/ProfileService';
import { errorNotification, successNotification } from '../../Sercvices/NotificationService';
import { changeAppStatus } from '../../Sercvices/JobService';
import { formatInterviewTime, openResume } from '../../Sercvices/Utilities';

const TalentCard=(props)=>{
    const {id}=useParams();
    const [opened, { open, close }] = useDisclosure(false);
    const[app,{open:openApp,close:closeApp}]=useDisclosure(false)
    const [date, setDate] = useState(null);
    const [time,setTime]=useState(null);
    const ref = useRef(null);
    const [profile,setProfile]=useState({});
    useEffect(()=>{
        if(props.applicantId)getProfile(props.applicantId).then((res)=>{
            setProfile(res);
        }).catch((err)=>{
            console.log(err)
        })
        else setProfile(props)
    },[props])
    const handleOffer=(status)=>{
        let interview={id,applicantId:profile?.id,applicationStatus:status};
        if(status === 'INTERVIEWING'){
            const[hours,minutes]=time.split(':').map(String);
            date?.setHours(hours, minutes);
            console.log(date);
            interview={...interview,interviewTime:date}
        }

        changeAppStatus(interview).then((res)=>{
            if(status=="INTERVIEWING")successNotification("Scheduled","Interview Scheduled Successfully.");
            else if(status=="OFFERED")successNotification("Offered","Offer has been sent Successfully.");
            else successNotification("Rejected","Applicant has been Rejected.");
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
            errorNotification("Error",err.response.data.errorMessage)
        })
    }
    return(
        <div className='bg-gray-300  p-4 w-80 rounded-xl flex flex-col gap-2 hover:shadow-[0_0_5px_1px] !shadow-black duration-500'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className=' p-2 bg-gray-200 rounded-full'>
                        <Avatar className=' 'size="md" src={profile?.picture?`data:image/jpeg;base64,${profile?.picture}`:'/img/avatar.png'}  alt="" />
                    </div>
                    <div className='flex flex-col gap-1'> 
                        <div className='font-semibold text-lg'>{props.name}</div>
                        <div className='text-sm'>{profile?.jobTitle} &bull; {profile?.company} </div>
                    </div>
                </div>
                <IconHeart className='cursor-pointer'/>
            </div>
            <div className='flex gap-2  [&>div]:text-red-700 [&>div]:py-0 [&>div]:px-2 [&>div]:bg-gray-200 [&>div]:rounded-lg text-xs '>
                
                {
                    profile?.skills?.map((skill, index) =>index<4 &&<div key={index}>{skill}</div> )
                }
            </div>
            <Text className='text-xs text-justify ' lineClamp={3}>{profile.about}</Text>
            <Divider size="xs" color='white' />
            {
                props.invited?<div className='flex gap-1 text-sm items-center'>
                    <IconCalendarMonth stroke={1.5}/>Interview: {formatInterviewTime(props.interviewTime)}
                        </div>:<div className='flex   justify-between'>
                        <div className=' text-sm '>Exp: {props.totalExp?props.totalExp:0} Years</div>
                        <div className='flex  text-xs text-gray-600 items-center'><IconMapPin className='h-4 w-4'/>{profile?.location}</div>
                    </div>
            }
            
            <Divider size="xs" color='white' />
            <div className=' '>
                <div className='flex [&>*]:w-1/2'>
                {
                    !props.invited && <>
                    <Link to={`/talent-profile/${profile?.id}`}> 
                    <Button color='red' variant="outline" fullWidth>Profile</Button>
                    </Link>
                    <div>
                    {props.posted?<Button onClick={open} rightSection={<IconCalendarMonth className='w-5 h-5'/>} color='red' variant="light" fullWidth>Schedule</Button>:<Button color='red' variant="light" fullWidth>Message</Button>}
                    </div>
                    
                    
                    </>
                }</div>
            <div className='flex m-1 [&>*]:w-1/2'>
                {
                    props.invited && <>
                    <div><Button onClick={()=>handleOffer("OFFERED")} color='red' variant="outline" fullWidth>Accept</Button></div>
                    <div><Button onClick={()=>handleOffer("REJECTED")} color='red' variant="light" fullWidth>Reject</Button></div>
                    
                    </>
                }</div>
                
            {
               (props.invited ||props.posted ) && <Button  color='red' onClick={openApp} variant="light" fullWidth>View Application</Button>
            }
                
                <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                    <div className='flex flex-col gap-4'>
                        <DateInput minDate={new Date()} value={date} onChange={(setDate)} label="Date" placeholder="Enter Date"/>
                        <TimeInput value={time} label="Time"   onChange={(event)=>setTime(event.currentTarget.value)} ref={ref} onClick={()=>ref.current?.showPicker()}/>
                        <Button onClick={()=>handleOffer("INTERVIEWING")} color='red' variant="light" fullWidth>Schedule</Button>  
                    </div>
                </Modal>
                <Modal opened={app} onClose={closeApp} title="Schedule Interview" centered>
                    <div className='flex flex-col gap-4'>
                        <div>
                            Email: &emsp; <a className="text-red-900 hover:underline cursor-pointer text-center" href={`mailto:${props.email}`}>{props.email}</a>
                        </div> 
                        <div>
                            Website: &emsp; <a className="text-red-900 hover:underline cursor-pointer text-center" href={`mailto:${props.website}`}>{props.website}</a>
                        </div> 
                        <div>
                            Resume: &emsp; <span className="text-red-900 hover:underline cursor-pointer text-center" onClick={()=>openResume(props.resume)} >{props.name}</span>
                        </div> 
                        <div>
                            Cover Letter: &emsp; <div  >{props.coverLetter}</div>
                        </div> 
                    </div>
                </Modal>

            </div>
        </div>
    );
}
export default TalentCard;