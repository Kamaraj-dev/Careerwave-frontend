import { Button,Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Company from "../Components/CompanyProfile/Company";
import SimilarCompany from "../Components/CompanyProfile/SimilarCompany";

const CompanyPage=()=>{
    const navigate=useNavigate();
    return(
        <div className='p-4 '>
            <Button leftSection={<IconArrowLeft size={20}/>} onClick={()=>navigate(-1)} color="red" variant="light" >Back</Button>
            <Divider size="xs" my='lg' />
            <div className='md:flex gap-5'>  
                <Company/>
                <SimilarCompany/>
            </div>
        </div>
    );
}
export default CompanyPage;