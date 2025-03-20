import TalentCard from './TalentCard';
import Sort from '../FindJobs/Sort';

import { useEffect, useState } from 'react';
import { getAllProfiles } from '../../Sercvices/ProfileService';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../../Slices/FilterSlice';


const Talents=()=>{
    const dispatch=useDispatch();
    const [talents, setTalents] = useState([]);
    const filter=useSelector((state)=>state.filter);
    const sort=useSelector((state)=>state.sort);
    const [filteredTalents,setFilteredTalents]=useState([]);
    useEffect(()=>{
        dispatch(resetFilter());
        getAllProfiles().then((res)=>{
            setTalents(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    useEffect(() => {
        if(sort=="Experience: Low to High"){
            setTalents([...talents].sort((a,b)=>a.totalExp-b.totalExp))
        }else if(sort=="Experience: High to Low"){
            setTalents([...talents].sort((a,b)=>b.totalExp-a.totalExp))
        }
    },[sort])
    useEffect(() => {
        let filterTalent=talents;
        if(filter.name){
            filterTalent=filterTalent.filter((talent)=>talent.name.toLowerCase().includes(filter.name.toLowerCase()))
        } if (filter["Job Title"] && filter["Job Title"].length > 0) {
            filterTalent = filterTalent.filter((talent) => talent.jobTitle && filter["Job Title"].some((title) => talent.jobTitle.toLowerCase().includes(title.toLowerCase())));
        }
        if (filter.Location && filter.Location.length > 0) {
            filterTalent = filterTalent.filter((talent) => talent.location && filter.Location.some((location) => talent.location.toLowerCase().includes(location.toLowerCase())));
        }
        if (filter["Skill"] && filter["Skill"].length > 0) {
            filterTalent = filterTalent.filter((talent) => 
                filter["Skill"].some((skill) => 
                    talent.skills.some((Skill) => Skill.toLowerCase().includes(skill.toLowerCase()))
                )
        );}
        if (filter.exp && Array.isArray(filter.exp) && filter.exp.length > 1) {
            filterTalent = filterTalent.filter((talent) => talent.totalExp >= filter.exp[0] && talent.totalExp <= filter.exp[1]);
        }
        setFilteredTalents(filterTalent)
    },[filter,talents])
    return(
        <div className='p-3'>
            
            <div className='flex justify-between'>
                <div className='md:text-2xl font-semibold'>Talents</div>
                <Sort/>
            </div>
            <div className='mt-5 flex flex-wrap gap-4  '>
                {
                    filteredTalents.length?filteredTalents.map((talent,index)=><TalentCard key={index} {...talent}/>):<div className='text-xl font-semibold'>No Talents Found</div>
                }
                
            </div>
            


        </div>
    );
}
export default  Talents;;