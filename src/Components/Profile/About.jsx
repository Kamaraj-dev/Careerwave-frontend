import { ActionIcon, Textarea } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Sercvices/NotificationService";

const About=()=>{
    const dispatch=useDispatch();
    const [edit,setEdit]=useState(false);
    const profile=useSelector((state)=>state.profile);
    const [about,setAbout]=useState("");
    const handleClick=()=>{
        if(!edit){
            setEdit(true);
            setAbout(profile.about);
        }
        else{
            setEdit(false);
        }
    }

    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile,about:about};
        dispatch(changeProfile(updatedProfile));
        window.location.reload();
        successNotification("Success","Your About has been updated successfully");
    }

    return(
    <div className="px-3">
        <div className=' md:text-2xl font-semibold mb-3  flex justify-between '>About <div> {edit&&<ActionIcon onClick={handleSave} size={'lg'} color='red' variant='subtle' aria-label="Settings">
                <IconCheck className='w-4/5  h-4/5'/></ActionIcon>}
                
                <ActionIcon onClick={handleClick} size={'lg'} color='red' variant='subtle' aria-label="Settings">
                {edit?<IconX className='w-4/5  h-4/5'/>:<IconPencil className='w-4/5 h-4/5' />}
                </ActionIcon>
                </div>
            </div>
        {
            edit?<><Textarea value={about} placeholder='Enter About yourself..' onChange={(event)=>setAbout(event.currentTarget.value)}/></>:<div className='md:text-xl text-justify'>{profile?.about}</div>
        }

                
    </div>
    );
}
export default About;