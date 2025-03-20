import { ActionIcon } from "@mantine/core";
import {IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import CertCard from "./CertCard";
import CertInput from "./CertInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const Certificate = () => {
    const [edit,setEdit]=useState(false);
    const [addCert,setAddCert]=useState(false);
    const profile=useSelector((state)=>state.profile);
    const handleClick=()=>{
        setEdit(!edit);
    }
    return(
        <div className="px-3">
                <div className='md:text-2xl font-semibold mb-5  flex justify-between'>Certification 
                
                <div>
                <ActionIcon onClick={()=>setAddCert(true)} size={'lg'} color='red' variant='subtle' aria-label="Settings">
                        <IconPlus/>
                    </ActionIcon>
                    
                    <ActionIcon onClick={handleClick} size={'lg'} color='red' variant='subtle' aria-label="Settings">
                    {edit||addCert?<IconX className='w-4/5  h-4/5'/>:<IconPencil className='w-4/5 h-4/5' />}
                    </ActionIcon></div></div>
                <div className='flex flex-col gap-8'>
                {
                    profile?.certifications?.map((certi, index)=><CertCard key={index} index={index} {...certi} edit={edit}/> )
                }
                {
                    addCert&&<CertInput setEdit={setAddCert}/>
                }
                </div>
                
        </div>
    );
}
export default Certificate;