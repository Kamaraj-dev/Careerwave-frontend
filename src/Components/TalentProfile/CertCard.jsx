import { formatDate } from "../../Sercvices/Utilities";



const CertCard=(props)=>{
    return(
        <div className="flex flex-col gap-2 ">
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-2 bg-gray-200 rounded-md'>
                        <img className='h-7 ' src={`/Jobs/${props.issuer}.png`}  alt="" />
                    </div>
                    <div className=''>
                        <div className='text-sm md:text-lg font-semibold'>{props.name}</div>
                        <div className='text-sm md:text-lg'>{props.issuer}</div>

                    </div>
                </div>
                <div className="flex flex-col items-end text-sm md:text-lg ">
                    <div>{formatDate(props.issueDate)} </div>
                    <div>UID:{props.certificateId}</div>
                </div>
                
            </div>
            
        </div>
    );

}
export default CertCard;