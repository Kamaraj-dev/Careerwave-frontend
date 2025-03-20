import { Badge,Tabs } from "@mantine/core";
import JobDescribe from '../JobDescribe/JobDescribe'
import {talents} from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard"
import { useEffect, useState } from "react";

const PostedJobDesc=(props)=>{
    const [tab,setTab]=useState("overview");
    const [arr,setArr]=useState([])
    const handleTabChange=(value)=>{
        setTab(value);
        if(value=="applicant"){
            setArr(props.applicants?.filter((x)=>x.applicationStatus=="APPLIED") )
        }
        else if(value=="invited"){
            setArr(props.applicants?.filter((x)=>x.applicationStatus=="INTERVIEWING") )
        }
        else if(value=="rejected"){
            setArr(props.applicants?.filter((x)=>x.applicationStatus=="REJECTED") )
        }
        else if(value=="offered"){
            setArr(props.applicants?.filter((x)=>x.applicationStatus=="OFFERED") )
        }
    }
    useEffect(()=>{
        handleTabChange("overview")
    },[props])
    return(
        <div className="mt-5 md:w-3/4 px-5 ">
            {props.jobTitle ?<>
            <div className="md:text-2xl font-semibold flex items-center ">{props.jobTitle} <Badge ml={'sm'} size="sm" variant="light">{props.jobStatus}</Badge> </div>
            <div className="font-medium mb-5">{props.location}</div>
            <div>
                <Tabs value={tab} onChange={handleTabChange} variant='outline'  >
                <Tabs.List className="[&_button]:font-semibold mb-5 [&_button[data-active='true']]:text-red-500">
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicant">Applicant</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    <Tabs.Tab value="offered">Offered</Tabs.Tab>
                    <Tabs.Tab value="rejected">Rejected</Tabs.Tab>

                </Tabs.List>

                <Tabs.Panel value="overview" className="[&_div]:w-auto"><JobDescribe {...props} edit={true} closed={props.jobStatus=="CLOSED"}/></Tabs.Panel>
                <Tabs.Panel value="applicant">
                    <div className="flex flex-wrap gap-3 justify-around">
                    {
                        arr?.length?arr.map((talent,index)=> <TalentCard key={index} {...talent} posted={true}/>):<div className="md:text-2xl font-semibold">No Applicant </div>
                    }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="invited">
                <div className="flex flex-wrap gap-3 justify-around">
                    {
                        arr?.length?arr.map((talent,index)=> <TalentCard key={index} {...talent} invited={true}/>):<div className="md:text-2xl font-semibold">No Invited Candidates</div>
                    }
                </div>
                </Tabs.Panel>
                <Tabs.Panel value="offered">
                <div className="flex flex-wrap gap-3 justify-around">
                    {
                        arr?.length?arr.map((talent,index)=> <TalentCard key={index} {...talent} offered/>):<div className="md:text-2xl font-semibold">No Offered Candidates</div>
                    }
                </div>
                </Tabs.Panel>
                <Tabs.Panel value="rejected">
                <div className="flex flex-wrap gap-3 justify-around">
                    {
                        arr?.length?arr.map((talent,index)=> <TalentCard key={index} {...talent} offered/>):<div className="md:text-2xl font-semibold">No Rejected Candidates</div>
                    }
                </div>
                </Tabs.Panel>
                </Tabs>
            </div>
            </>:<div className="text-2xl font-semibold text-center ">No Job Selected</div>}
        </div>
    );
}
export default PostedJobDesc;