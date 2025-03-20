import { ActionIcon } from "@mantine/core";
import {  IconExternalLink } from "@tabler/icons-react";

const CompanyCard=(props)=>{
    return(
        <div>
            <div className='flex justify-between bg-gray-200 items-center rounded-lg p-2'>
                <div className='flex gap-2 items-center'>
                    <div className='p-2 bg-gray-200 rounded-md'>
                        <img className='h-7 ' src={`/Jobs/${props.name}.png`}  alt="" />
                    </div>
                    <div className=''>
                        <div className='font-semibold'>{props.name}</div>
                        <div className='text-xs'>{props.employee} Employees</div>
                    </div>
                </div>
                <ActionIcon variant="subtle"><IconExternalLink /></ActionIcon>
                
            </div>
        </div>

    );
}
export default CompanyCard;