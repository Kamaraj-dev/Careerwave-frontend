
import { Divider } from '@mantine/core';
import SearchBar from '../Components/FindTalent/SearchBar';
import Talents from '../Components/FindTalent/Talents'




const FindTalent=()=>{
    return(
        <div>
            <SearchBar/>
            <Divider size="xs" />
            <Talents/>


        </div>
    );
}
export default FindTalent;