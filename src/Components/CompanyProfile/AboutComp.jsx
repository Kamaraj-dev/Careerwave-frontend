import { companyData } from "../../Data/Company";

const AboutComp=()=>{
    const company=companyData;
    return(
        <div>
            {
                Object.keys(company).map((key,index)=>key!='name' && <div key={index}>
                    <div className="md:text-xl mb-2 font-semibold">{key}</div>
                    {key!="Website" && <div className="text-sm mb-1 text-justify">{key!="Specialties"?company[key]:company[key].map((item,index)=><span> &bull;{item}</span>)}</div>}
                    {key=="Website" && <a href={company[key]} className="text-sm  text-red-600 text-justify" target="_blank">{company[key]}</a>}
                </div>
                )
            }
        </div>

    );
}
export default AboutComp;