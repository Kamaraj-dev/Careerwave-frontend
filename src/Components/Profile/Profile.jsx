import {Avatar, Divider, FileInput, Indicator, Overlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../Sercvices/ProfileService';
import Info from './Info';
import { changeProfile } from '../../Slices/ProfileSlice';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Certificate from './Certificate';
import { IconEdit } from '@tabler/icons-react';
import { useHover } from '@mantine/hooks';
import { successNotification } from '../../Sercvices/NotificationService';
import { getBase64 } from '../../Sercvices/Utilities';



const Profile=()=>{
    const dispatch=useDispatch();
    const profile=useSelector((state)=>state.profile);
    const{hovered,ref}=useHover();
    const handleFileChange=async(image)=>{
        let picture=await getBase64(image);
        let updatedProfile={...profile,picture:picture.split(',')[1]};
        dispatch(changeProfile(updatedProfile));
        window.location.reload();
        successNotification("Success","Profile Picture updated successfully");
        
    };

    return(
        <div className="w-4/5 mx-auto ">
            <div className="relative">
                <img className="rounded-t-2xl" src={"/Profile/Profile.png"} alt="" />
                <div ref={ref} className='absolute flex  items-center justify-center top-1/2 left-3 '>
                        <Avatar className='w-24 h-24 md:!w-36 md:!h-36 border-black border-2' src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:'/img/avatar.png'}/>
                        {hovered && <Overlay className='!rounded-full' color='#000' backgroundOpacity={0.5}/>}
                        {hovered && <IconEdit className='absolute z-[300] w-10 h-10' color='white'/>}
                        {hovered && <FileInput className='absolute z-[301]  w-full !h-full [&_*]:!h-full [&_*]:!rounded-full' onChange={handleFileChange} variant="transparent" accept="image/*" />}

                </div>
            </div>
            <Info/>
            <Divider size="xs" my="lg" />
            <About/>
            <Divider size="xs" my="lg" />
            <Skills/>
            <Divider size="xs" my="lg" />
            <Experience/>
            <Divider size="xs" my="lg" />
            <Certificate/>

        </div>
    );
}
export default Profile;