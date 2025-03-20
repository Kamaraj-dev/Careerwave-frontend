import { useParams } from "react-router-dom";
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";


const RecommendTalent=(props)=>{
    const {id}=useParams();
    return(<div>
        <div className="md:text-xl font-semibold mt-3 mb-5">Recommended Talent</div>
        <div className="flex flex-col flex-wrap gap-5">
            {props?.talents?.map((talent,index)=>index<4 && id!=talent.id && <TalentCard key={index} {...talent}/>)}
        </div>

    </div>
    );
}
export default RecommendTalent;