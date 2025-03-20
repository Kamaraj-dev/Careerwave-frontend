import React, {  useState } from 'react';
import {  searchFields } from '../../Data/TalentData';
import MultiSelectCreatable from '../FindJobs/MultiSelectCreatable';
import { Divider,RangeSlider,Input } from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../Slices/FilterSlice';

const SearchBar=()=>{
    const dispatch=useDispatch();
    const [value, setValue] = useState([0, 40]);
    const [name,setName]=useState('')
    const handleChange=(name,event)=>{
        if(name=="exp")dispatch(updateFilter({exp:event}));
        else{
            setName(event.target.value);
            dispatch(updateFilter({name:event.target.value}));
        }
    }
    return(
        <div  className='md:flex px-5 py-5 justify-between'>
            <div className='flex items-center'>
                <div className='text-black bg-gray-200 rounded-full p-1 mr-2' ><IconUserCircle size={20}/> </div>
                <Input defaultValue={name} onChange={(e)=>handleChange("name",e)} className='[&_input]:!placeholder-gray-500' variant="unstyled" placeholder="Talent Name" />
            </div>
        {
            searchFields.map((item,index)=>{
                return <React.Fragment key={index}><div key={index} className='md:w-1/5'>
                <MultiSelectCreatable {...item} />

            </div>
            <Divider size="md" orientation="vertical" />
            </React.Fragment>}
            )
        }
        <div className='md:w-1/5 [&_.mantine-Slider-label]:!translate-y-10'>
        <div className='flex justify-between'>
            <div>Experiences(Years):</div>
            <div>{value[0]} -{value[1]} </div>
        </div>
            <RangeSlider onChangeEnd={(e)=>handleChange("exp",e)} minRange={1} size='xs' color="red" min={0} max={40} labelTransitionProps={{transition: 'skew-down',duration: 150,timingFunction: 'Linear',}} value={value} onChange={setValue} />
        </div>
            
        </div>
    );
}
export default SearchBar;