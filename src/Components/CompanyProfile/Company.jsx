import { Button,Divider,Avatar,Tabs, } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJob from "./CompanyJob";
import CompanyEmployee from "./CompanyEmployee";


const Company=()=>{


    return(
        <div className="md:w-3/4">
            <div className="relative">
                <img className="rounded-t-2xl " src={"/Profile/Profile.png"} alt="" />
                <img className="w-20 md:w-32 p-2 md:top-20 bg-white rounded-3xl left-3 absolute top-8 border-8 border-white" src={"/Companies/Google.png"} alt="" />

                
            </div>
            <div className="p-3 mt-12">
                <div className='md:text-2xl font-semibold flex justify-between'>Google 
                    <Avatar.Group>
                    <Avatar src="/img/avatar.png" />
                    <Avatar src="/img/avatar1.png" />
                    <Avatar src="/img/avatar2.png" />
                    <Avatar>+10k</Avatar>
                    </Avatar.Group></div>
                <div className='flex  md:text-lg text-gray-600 items-center'><IconMapPin className='h-4 w-4 mr-2'/> Chennai </div>
            </div>
            <Divider size="xs" my="lg" />
            <div>
            <Tabs variant='outline' defaultValue='About' >
            <Tabs.List className="[&_button]:font-semibold mb-5 [&_button[data-active='true']]:text-red-500">
                <Tabs.Tab value="About">About</Tabs.Tab>
                <Tabs.Tab value="Jobs">Jobs</Tabs.Tab>
                <Tabs.Tab value="Employees">Employees</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="About"><AboutComp/></Tabs.Panel>
            <Tabs.Panel value="Jobs"><CompanyJob/></Tabs.Panel>
            <Tabs.Panel value="Employees"><CompanyEmployee/></Tabs.Panel>
            </Tabs>
            </div>
        </div>
    );
}
export default Company;