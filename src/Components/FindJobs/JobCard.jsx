import { IconBookmark, IconBookmarkFilled, IconClockHour3 } from '@tabler/icons-react';
import { Text, Divider, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../Sercvices/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../Slices/ProfileSlice';

const JobCard = (props) => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);

    const handleSaveJob = () => {
        let savedJobs = Array.isArray(profile.savedJobs) ? [...profile.savedJobs] : [];
        if (savedJobs.includes(props.id)) {
            savedJobs = savedJobs.filter((id) => id !== props.id);
        } else {
            savedJobs = [...savedJobs, props.id];
        }
        let updatedProfile = { ...profile, savedJobs: savedJobs };
        dispatch(changeProfile(updatedProfile));
        window.location.reload();
    };

    return (
        <div className='bg-gray-300 p-4 w-80 rounded-xl flex flex-col hover:shadow-[0_0_5px_1px] !shadow-black duration-500'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-2 bg-gray-200 rounded-md'>
                        <img className='h-7 ' src={`/Jobs/${props.company}.png`} alt="" />
                    </div>
                    <div className=''>
                        <div className='font-semibold'>{props.jobTitle}</div>
                        <div className='text-xs'><Link to={"/company"}> {props.company} </Link> &bull; {props.applicants ? props.applicants.length : 0} Applicants</div>
                    </div>
                </div>
                {Array.isArray(profile.savedJobs) && profile.savedJobs.includes(props.id) ? 
                    <IconBookmarkFilled onClick={handleSaveJob} color='red' className='cursor-pointer hover:text-red-600' />
                 : 
                    <IconBookmark onClick={handleSaveJob} color='red' className='cursor-pointer hover:text-red-600' />
                }
            </div>
            <div className='flex gap-2  [&>div]:text-red-700 [&>div]:py-0 [&>div]:px-2 [&>div]:bg-gray-200 [&>div]:rounded-lg text-xs '>
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            <Text className='text-xs text-justify m-1' lineClamp={3}>{props.about}</Text>
            <Divider size="xs" color='white' />
            <div className='flex justify-between'>
                <div className='text-sm'> &#8377; {props.packageOffered} LPA</div>
                <div className='flex text-xs text-gray-600 items-center'><IconClockHour3 className='h-4 w-4' /> {timeAgo(props.postTime)} </div>
            </div>
            <Link to={`/jobs/${props.id}`}><Button m={2} color='red' fullWidth variant='outline'>View Job</Button></Link>
        </div>
    );
}

export default JobCard;