import { IconArrowLeft, IconUserCode } from "@tabler/icons-react";

import LogIn from "../Components/SignUpLogIn/LogIn";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "@mantine/core";
import SignUp from "../Components/SignUpLogIn/SignUp";


const SignUpPage=()=>{
    const location=useLocation();
    const navigate=useNavigate();
    return(
        <div className=" min-h-[90vh] overflow-hidden relative">
            <Button leftSection={<IconArrowLeft size={20}/>} onClick={()=>navigate("/")} className="!absolute m-5 z-10" color="red" variant="light" >Home</Button>
            <div className={`flex w-[100vw] h-[100vh] transition-all duration-700 ease-in-out  [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'md:-translate-x-1/2 -translate-x-full':'translate-x-0'}`}>
                <LogIn/>
                <div className={`hidden md:flex flex-col items-center gap-3 justify-center transition-all duration-700 ease-in-out h-full w-1/2 bg-gray-200  ${location.pathname=='/signup'?'rounded-r-[200px]':'rounded-l-[200px]'}`}>
                    <div className="flex gap-1 items-center text-red-900">
                        <IconUserCode className="h-16 w-16" stroke={2} />
                        <div className="text-5xl font-semibold">CareerWave</div>
                    </div>
                    <div className="text-2xl font-semibold text-gray-800">Find the made for you</div>
                </div>
                <SignUp/>
            </div>
            
        </div>

    );
}
export default SignUpPage;