import { Menu, Button, Text,Avatar } from '@mantine/core';
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconLogout,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../../Slices/UserSlice';

const ProfileMenu=()=> {
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.user)
    const profile=useSelector((state)=>state.profile);
    const [opened, setOpened] = useState(false);
    const handleLogout = () =>{
      dispatch(removeUser());
      
    }

  return (
    <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
      <Menu.Target>
        <div className="flex items-center cursor-pointer space-x-2">
            <div className='hidden md:block text-md'>{profile.name}</div>
            <Avatar src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:'/img/avatar.png'} className="w-8 h-8" />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Link to={"/profile"}>
            <Menu.Item leftSection={<IconUserCircle size={14} />}>
            Profile
            </Menu.Item>
        </Link>
        
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>

        <Menu.Divider />
        <Link to={"/"}>
          <Menu.Item
            onClick={handleLogout}
            color="red"
            leftSection={<IconLogout size={14} />}>
            LogOut
          </Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  );
}
export default ProfileMenu;