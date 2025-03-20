import { ActionIcon, NumberInput } from "@mantine/core";
import { useForm } from '@mantine/form';

import SelectInput from "./SelectInput";
import { IconBriefcase, IconCheck, IconMapPin, IconPencil, IconX } from "@tabler/icons-react";
import { fields } from "../../Data/Profile";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Sercvices/NotificationService";

const Info=()=>{
    const select=fields;
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.user);
    const profile=useSelector((state)=>state.profile);
    const [edit,setEdit]=useState(false);
    
    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', company: '',location:'',totalExp:0 },
    });
    const handleClick=()=>{
        if(!edit){
            setEdit(true);
            form.setValues({jobTitle:profile.jobTitle,company:profile.company,location:profile.location,totalExp:profile.totalExp});
        }
        else{
            setEdit(false);
        }
    }


    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile,...form.getValues()};
        dispatch(changeProfile(updatedProfile));
        window.location.reload();
        successNotification("Success","Your profile has been updated successfully");
        
    }
    
    return(
        <div className="p-3 mt-16 ">
            <div className='text-lg md:text-2xl mb-1 font-semibold flex justify-between'>{profile.name} <div> {edit&&<ActionIcon onClick={handleSave} size={'lg'} color='red' variant='subtle' aria-label="Settings">
                <IconCheck className='w-4/5  h-4/5'/></ActionIcon>}
                
                <ActionIcon onClick={handleClick} size={'lg'} color='red' variant='subtle' aria-label="Settings">
                {edit?<IconX className='w-4/5  h-4/5'/>:<IconPencil className='w-4/5 h-4/5' />}
                </ActionIcon>
                </div></div>
                {
                    edit?<><div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput form={form} name="jobTitle" {...select[0]}/>
                    <SelectInput form={form} name="company" {...select[1]}/>
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput form={form} name="location" {...select[2]}/>
                    <NumberInput withAsterisk hideControls clampBehavior="strict" min={0} max={50} label="Experience" {...form.getInputProps('totalExp')}/>
                    </div>
                    </>:<><div className='md:text-xl mb-1 flex  gap-1 items-center'><IconBriefcase/>{profile.jobTitle} <div>&bull; {profile.company}</div> </div>
                <div className='flex  md:text-lg text-gray-600 items-center'><IconMapPin className='h-4 w-4 mr-2'/>{profile.location} </div>
                <div className='flex  md:text-lg text-gray-600 items-center'><IconBriefcase className='h-4 w-4 mr-2'/>Experience: {profile.totalExp} Years </div></>
                }
        </div>
    );
}
export default Info;