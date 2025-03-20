import { formatDate } from "../../Sercvices/Utilities";



const ExpCard=(props)=>{
    return(
        <div className="flex flex-col gap-2 ">
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-2 bg-gray-200 rounded-md'>
                        <img className='h-7 ' src={`/Jobs/${props.company}.png`}  alt="" />
                    </div>
                    <div className=''>
                        <div className='text-sm md:text-lg font-semibold'>{props.title}</div>
                        <div className='text-sm md:text-lg'>{props.company} &#x2022; {props.location}</div>
                    </div>
                </div>
                <div className="text-sm md:text-lg">
                    {formatDate(props.startDate)} - {formatDate(props.endDate)}
                </div>
            </div>
            <div className="text-sm md:text-lg text-justify">
               {props.description}
            </div>
        </div>
    );

}
export default ExpCard;