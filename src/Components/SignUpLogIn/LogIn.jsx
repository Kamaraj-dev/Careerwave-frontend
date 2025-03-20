import { TextInput,PasswordInput, Button, LoadingOverlay } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginValidation } from "../../Sercvices/FormValidation";

import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../../Slices/UserSlice";
import { errorNotification, successNotification } from "../../Sercvices/NotificationService";
import { setJwt } from "../../Slices/JwtSlice";
import { loginUser } from "../../Sercvices/AuthService";
import {jwtDecode} from 'jwt-decode';




const LogIn=()=>{
    const [loading,setLoading]=useState(false);
    const dispatch=useDispatch();
    const form={
        email:"",
        password:""
    
    }
    const [data,setData]=useState(form);
    const [formError,setFormError]=useState(form);
    const [opened, {open,close}] = useDisclosure(false)
    const navigate=useNavigate();

    const handleChange=(event)=>{
        setFormError({...formError,[event.target.name]:""})
        setData({...data,[event.target.name]:event.target.value})
    }
    
    const handleSubmit=()=>{
        
        let valid=true,newFormError={};
        for(let key in data){
            newFormError[key]=loginValidation(key,data[key]);
            if(newFormError[key]!=="")valid=false;

        }
        setFormError(newFormError)

        if(valid){
            setLoading(true);
            loginUser(data).then((res)=>{
                successNotification('Login Successfully','Redirecting to home page...')
                dispatch(setJwt(res.jwt))
                const decoded=jwtDecode(res.jwt)
                dispatch(setUser({...decoded, email:decoded.sub}));
                setTimeout(()=>{
                    navigate("/");
                },2000)
            }).catch((err)=>{
                setLoading(false);
                errorNotification('Login Failed',err.response.data.errorMessage)
                }
            );
        }
        
    }

    return(
        <>
        <LoadingOverlay visible={loading} zIndex={1000}  overlayProps={{ radius: "sm", blur: 2 }} loaderProps={{ color: 'red', type: 'bars' }} />
            <div className="w-full md:w-1/2 md:px-20 p-10 gap-3 flex flex-col justify-center" >
                <div className="text-sm md:text-2xl font-semibold">Login Your Account</div>
                <TextInput value={data.email} error={formError.email} onChange={handleChange} name="email" withAsterisk leftSection={<IconAt className="w-4"/>} label="Your email" placeholder="Your email"/>
                <PasswordInput value={data.password} error={formError.password} onChange={handleChange} name="password" withAsterisk leftSection={<IconLock className="w-4"/>} label="Password" placeholder="Password" />
                <Button loading={loading} onClick={handleSubmit} color="red" variant="filled">LogIn</Button>
                <div className="mx-auto">Create an Account? <span onClick={()=>{navigate("/signup");setFormError(form);setData(form)}}  className="text-red-900 cursor-pointer"> SignUp</span></div>
                <div onClick={open} className="text-red-900 hover:underline cursor-pointer text-center">Forget Password?</div>
            </div>
            <ResetPassword opened={opened} close={close} />
        </>

    );
}
export default LogIn;