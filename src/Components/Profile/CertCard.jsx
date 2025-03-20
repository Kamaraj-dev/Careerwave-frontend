import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { formatDate } from "../../Sercvices/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Sercvices/NotificationService";



const CertCard=(props)=>{
    const dispatch=useDispatch();
    const profile=useSelector((state)=>state.profile);
    const handleDelete=()=>{
        let certi=[...profile.certifications];
        certi.splice(props.index,1);
        let updatedProfile={...profile,certifications:certi};
        dispatch(changeProfile(updatedProfile));
        window.location.reload();
        successNotification("Success","Certificate Deleted Successfully");
    }
    return(
        <div className="flex flex-col gap-2 ">
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-2 bg-gray-200 rounded-md'>
                        <img className='h-7 ' src={`/Jobs/${props.issuer}.png`}  alt="" />
                    </div>
                    <div className=''>
                        <div className='text-xs md:text-base font-semibold'>{props.name}</div>
                        <div className='text-xs md:text-base'>{props.issuer}</div>

                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-end text-xs md:text-base ">
                        <div>Issued: {formatDate(props.issueDate)} </div>
                        <div>UId: {props.certificateId}</div>
                    </div>
                    {props.edit&&<ActionIcon onClick={handleDelete}  size={'lg'} color='red' variant='subtle' aria-label="Settings">
                        <IconTrash className="w-4/5 h-4/5" stroke={1.5} />
                    </ActionIcon>}
                </div>
            </div>
            
        </div>
    );

}
export default CertCard;