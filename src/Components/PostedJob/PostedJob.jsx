import {  Divider, Tabs } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { useEffect, useState } from "react";

const PostedJob=(props)=>{
    const [activeTab,setActiveTab]=useState('ACTIVE');
    useEffect(()=>{
        setActiveTab(props.job?.jobStatus||'ACTIVE');
    },[props.job]);
    return(
        <div className="md:w-1/5 mt-5">
            <div className="md:text-2xl font-semibold mb-5">Jobs</div>
            <div>
            <Tabs color="red" variant="pills" value={activeTab} onChange={setActiveTab} >
            <Tabs.List className="[&_button[aria-selected='false']]:bg-gray-200 font-semibold">
                <Tabs.Tab value="ACTIVE">Active[{props.jobList?.filter((job)=>job.jobStatus=="ACTIVE").length}]</Tabs.Tab>
                <Tabs.Tab value="DRAFT">Drafts[{props.jobList?.filter((job)=>job.jobStatus=="DRAFT").length}] </Tabs.Tab>
                <Tabs.Tab value="CLOSED">Closed[{props.jobList?.filter((job)=>job.jobStatus=="CLOSED").length}] </Tabs.Tab>
            </Tabs.List>
            </Tabs>
                <div className="flex flex-col mt-2 gap-2">
                    {
                        props.jobList?.filter((job)=>job.jobStatus==activeTab).map((item,index)=><PostedJobCard key={index} {...item} />)
                    }
                </div>
            </div>
            <Divider  />
        </div>
    );
}
export default PostedJob;