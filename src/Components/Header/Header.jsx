import React, { useEffect } from "react";
import { Indicator,  Button, Drawer, Burger } from "@mantine/core";
import { IconBell, IconUserCode, IconSettings, IconX } from "@tabler/icons-react";
import Navlinks from "./Navlinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../Slices/ProfileSlice";
import { getProfile } from "../../Sercvices/ProfileService";
import NotiMenu from "./NotiMenu";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../../Slices/UserSlice";
import { setupResponseInterceptor } from "../../Interceptor/AxiosInterceptor";
import { useDisclosure } from "@mantine/hooks";

const Header = () => {
  const [opened, {open,close}] = useDisclosure();
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user);
  const token=useSelector((state)=>state.jwt)
  const navigate=useNavigate();
  useEffect(()=>{
    setupResponseInterceptor(navigate);
  },[navigate])
  useEffect(() => {
    if (user?.profileId){
    if(token!=""){
      const decoded=jwtDecode(localStorage.getItem("token")||"")
      dispatch(setUser({...decoded,email:decoded.sub}))
    }
      getProfile(user?.profileId)
        .then((data) => {
          dispatch(setProfile(data));
        })
        .catch((error) => {
          console.log(error);
        });
      }
  }, [token,user?.profileId]);
  const location=useLocation();

  const links = [
    { name: "Find Job", url: "/find-job" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job/0" },
    { name: "Posted Job", url: "/posted-job/0" },
    { name: "Job History", url: "/job-history" },
];
  return ( location.pathname!="/signup" && location.pathname!="/login"?
    <header className="flex items-center justify-between py-4 px-4 bg-gray-50 shadow-md">

      <div className="flex items-center text-sm md:text-lg text-red-800">
        <a href="/" className="flex items-center">
          <IconUserCode className="md:w-8" />
          <span className="ml-1 font-bold">CareerWave</span>
        </a>
      </div>
      <div className="hidden md:flex space-x-6 text-xl">
        <Navlinks />
      </div>

      <div className="flex items-center space-x-4 md:space-x-5 text-lg font-semibold">
        {user ? <ProfileMenu/> : <Link to="/login">
          <Button variant="subtle" color="red">Login</Button>
        </Link> }


        {user?
        <div className="flex p-2 rounded-full  transition-colors relative" aria-label="Notifications">
          <NotiMenu/>
        </div>:<></>}
        <div className="md:hidden">
          <Burger opened={opened} onClick={open} />
          <Drawer size={"xs"} opened={opened} onClose={close} overlayProps={{backgroundOpacity:0.5,blur:4}} closeButtonProps={{icon:<IconX size={30} />}} position="right">
          <div className="flex flex-col items-center gap-5">
          {links.map((link, index) => (
                <div key={index}
                    className={`${location.pathname =="/"+link.url ? "text-red-800  border-red-800 border-t-2" : "text-black"}`}>
                    <Link to={link.url} key={index}>
                        {link.name}
                    </Link>
                </div>
            ))}
            </div>
          </Drawer>
          </div>
      </div>
    </header>:<></>
  );
};

export default Header;
