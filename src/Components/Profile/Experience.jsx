import { ActionIcon } from "@mantine/core";
import {IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import ExpInput from "./ExpInput";



const Experience = () => {
    const [edit,setEdit]=useState(false);
    const [addExp,setAddExp]=useState(false);
    const profile=useSelector((state)=>state.profile);
    const handleClick=()=>{
        setEdit(!edit);
    }
    return(
        <div className="px-3">
            <div className='md:text-2xl font-semibold mb-5  flex justify-between'>Experience
            <div className='flex gap-2'>
                <ActionIcon onClick={()=>setAddExp(true)} size={'lg'} color='red' variant='subtle' aria-label="Settings">
                    <IconPlus/>
                </ActionIcon>
                    
                <ActionIcon onClick={handleClick} size={'lg'} color='red' variant='subtle' aria-label="Settings">
                {edit?<IconX className='w-4/5  h-4/5'/>:<IconPencil className='w-4/5 h-4/5' />}
                </ActionIcon></div>
            </div>
            <div className='flex flex-col gap-8'>
            {
                profile?.experiences?.map((exp, index)=><ExpCard key={index} {...exp} index={index} edit={edit}/> )
            }
            {addExp&&<ExpInput add setEdit={setAddExp} />}

            </div>
                
        </div>
    );
}
export default Experience;