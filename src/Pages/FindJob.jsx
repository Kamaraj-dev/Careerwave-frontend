import SearchBar from "../Components/FindJobs/SearchBar";
import { Divider } from '@mantine/core';
import Jobs from "../Components/FindJobs/Jobs";



const FindJob=()=>{
    return(
        <div>
            
            <SearchBar/>
            <Divider size="xs" />
            <Jobs/>



        </div>
    );
}
export default FindJob;