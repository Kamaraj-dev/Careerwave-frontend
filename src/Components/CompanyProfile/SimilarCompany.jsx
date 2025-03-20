import { similar } from "../../Data/Company";
import CompanyCard from "./CompanyCard";

const SimilarCompany=()=>{
    return (
        <div className="md:w-1/4">
        <div className="md:text-xl font-semibold mt-3 mb-5">Recommended Talent</div>
        <div className="flex flex-col flex-wrap gap-5">
            {similar.map((company,index)=><CompanyCard key={index} {...company}/>)}
        </div>

    </div>
    );
}
export default SimilarCompany;