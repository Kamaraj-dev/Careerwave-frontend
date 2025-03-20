import { useNavigate } from "react-router-dom";
import { Divider} from "@mantine/core";
import ApplicationForm from "./ApplicationForm";
import { timeAgo } from "../../Sercvices/Utilities";

const ApplyJobComp=(props)=>{
    const navigate=useNavigate();
    
    return(

    <div className="w-2/3 mx-auto">
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-3 bg-gray-200 rounded-xl'>
                        <img className='h-14 ' src={`/Jobs/${props.company}.png`}  alt="" />
                    </div>
                    <div className=''>
                        <div className='font-semibold text-xl'>{props.jobTitle}</div>
                        <div className='text-lg'>{props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants?props.applicants.length:0} Applicants</div>
                    </div>
                </div>  
            </div>
            <Divider my={'xl'}/>
            <ApplicationForm/>
    </div>
    );
}
export default ApplyJobComp;