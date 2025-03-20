import { Indicator, Menu, Notification, rem, Stack } from "@mantine/core";
import { IconBell, IconCheck } from "@tabler/icons-react";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNotification, readNotification } from "../../Sercvices/NotiService";



const NotiMenu=()=>{
        const [opened, setOpened] = useState(false);
        const user=useSelector((state)=>state.user);
        const navigate=useNavigate();
        const [notifications,setNotification]=useState([]);
        const unread=(index)=>{
            let notis=[...notifications];
            notis=notis.filter((noti,i)=>i!=index);
            setNotification(notis);
            readNotification(notifications[index].id).then((res)=>res).catch((err)=>console.log(err));
        }
        useEffect(()=>{
            if(user?.id){
            getNotification(user.id).then((res)=>{
                setNotification(res);
            }).catch((err)=>{
                console.log(err);
            })
        }
        },[user]);
    return (
        <Menu opened={opened} onChange={setOpened} shadow="md" width={400}>
              <Menu.Target>
                <div className="flex items-center cursor-pointer space-x-2">
                <Indicator disabled={!notifications ||notifications.length<=0} color="blue" size={8} processing>
                    <IconBell size={24} />
                </Indicator>
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                <div className="flex flex-col">
                    {
                        notifications.map((noti,index)=>
                            <Notification onClick={()=>{
                                navigate(noti.route);
                                setOpened(false);
                                unread(index);
                                           
                            }} key={index} onClose={()=>unread(index)} className="w-full h-full cursor-pointer" icon={<IconCheck  style={{width:rem(20),height:rem(20)}}/>} color="teal" title={noti.action} mt='md' >
                            {noti.message}
                            </Notification>

                        )
                    }
                    {
                        notifications.length==0 && <div className="text-center text-gray-400">No notifications</div>
                    }
                </div>

              </Menu.Dropdown>
            </Menu>
    );
}
export default NotiMenu;