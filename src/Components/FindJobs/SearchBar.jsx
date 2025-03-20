import React, { useEffect, useState } from 'react';
import { dropdownData } from '../../Data/jobsData';
import MultiSelectCreatable from './MultiSelectCreatable';
import { Divider,RangeSlider } from '@mantine/core';
import { updateFilter } from '../../Slices/FilterSlice';
import { useDispatch } from 'react-redux';

const SearchBar=()=>{

    const dispatch=useDispatch();
    const [value, setValue] = useState([1, 200]);
    const handleChange=(event)=>{
        dispatch(updateFilter({salary:event}));
    }
    
    return(
        <div className='md:flex px-5 py-5 justify-between'> 
        {
            dropdownData.map((item,index)=>{
                return <React.Fragment key={index}><div key={index} className='md:w-1/5'>
                <MultiSelectCreatable {...item} />

            </div>
            <Divider size="md" orientation="vertical" />
            </React.Fragment>}
            )
        }
        <div className='md:w-1/5 [&_.mantine-Slider-label]:!translate-y-10'>
        <div className='flex justify-between'>
            <div>Salary</div>
            <div>&#8377;.{value[0]} LPA -&#8377;.{value[1]} LPA</div>
        </div>
            <RangeSlider onChangeEnd={handleChange} minRange={1} min={1} max={200} size='xs' color="red"labelTransitionProps={{transition: 'skew-down',duration: 150,timingFunction: 'Linear',}} value={value} onChange={setValue} />
        </div>
            
        </div>
    );
}
export default SearchBar;