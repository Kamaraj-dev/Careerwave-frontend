import {talents} from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard"

const CompanyEmployee=()=>{
    return(
        <div className='mt-5 flex flex-wrap gap-3 '>
            {
                talents.map((talent,index)=>index<6&& <TalentCard key={index} {...talent}/>)
            }

        </div>
    );
}
export default CompanyEmployee;