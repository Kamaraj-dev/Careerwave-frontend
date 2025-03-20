import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formatDate } from "../../Sercvices/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Sercvices/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";



const ExpCard=(props)=>{
    const dispatch=useDispatch();
    const [edit,setEdit]=useState(false);
    const profile=useSelector((state)=>state.profile);
    const handleDelete=()=>{
        let exp=[...profile.experiences];
        exp.splice(props.index,1);
        let updatedProfile={...profile,experiences:exp};
        dispatch(changeProfile(updatedProfile));
        window.location.reload();
        successNotification("Success","Experience Deleted Successfully");
    }
    return(
        !edit ?
            <div className="flex flex-col gap-2 ">
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-2 bg-gray-200 rounded-md'>
                        <img className='h-7 ' src={`/Jobs/${props.company}.png`}  alt="" />
                    </div>
                    <div className=''>
                        <div className='text-sm md:text-lg font-semibold'>{props.title}</div>
                        <div className='text-xs md:text-base'>{props.company} &#x2022; {props.location}</div>
                    </div>
                </div>
                <div className="text-xs md:text-base">
                    {formatDate(props.startDate)} - {props.working?"Present":formatDate(props.endDate)}
                </div>
            </div>
            <div className="text-xs md:text-base text-justify">
               {props.description}
            </div>
            {props.edit&&<div className="flex gap-3">
                <Button onClick={()=>setEdit(true)} color="gray"  variant="outline">Edit</Button>
                <Button onClick={handleDelete} color="red" variant="light">Delete</Button>
            </div>}
        
        </div>:<ExpInput {...props} setEdit={setEdit}/>
    );

}
export default ExpCard;