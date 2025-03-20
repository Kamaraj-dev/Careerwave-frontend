import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Sercvices/NotificationService";


const Skills = () => {

    const dispatch=useDispatch();
    const [edit,setEdit]=useState(false);
    const profile=useSelector((state)=>state.profile);
    const [skills,setSkills]=useState([]);
    const handleClick=()=>{
        if(!edit){
            setEdit(true);
            setSkills(profile.skills);
        }
        else{
            setEdit(false);
        }
    }
    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile,skills:skills};
        dispatch(changeProfile(updatedProfile));
        window.location.replace("/profile");
        successNotification("Success","Your Skills has been updated successfully");
    }


    return (
        <div className="px-3">
                <div className='md:text-2xl font-semibold mb-3  flex justify-between'>Skills
                <div> {edit&&<ActionIcon onClick={handleSave} size={'lg'} color='red' variant='subtle' aria-label="Settings">
                    <IconCheck className='w-4/5  h-4/5'/></ActionIcon>}
                    
                    <ActionIcon onClick={handleClick} size={'lg'} color='red' variant='subtle' aria-label="Settings">
                    {edit?<IconX className='w-4/5  h-4/5'/>:<IconPencil className='w-4/5 h-4/5' />}
                    </ActionIcon>
                </div>
                </div>
                {
                    edit?<><TagsInput value={skills} onChange={setSkills}  placeholder="Add Skill"splitChars={[',', ' ', '|']}/></>
                    :<div className='flex flex-wrap gap-2'>
                    {
                        profile?.skills?.map((skill, index)=><div key={index} className='bg-red-800 bg-opacity-15 text-sm md:text-lg py-1 px-3 rounded-2xl'>{skill}</div>
                        )
                    }
                </div>
                }
                
                
            </div>
    );
}
export default Skills;