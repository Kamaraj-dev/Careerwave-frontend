import { TextInput,PasswordInput, Checkbox,Radio, Anchor, Button, Group, LoadingOverlay } from "@mantine/core";
import { IconAt, IconCheck,IconLock, IconX } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../Sercvices/UserService";
import { signupValidation } from "../../Sercvices/FormValidation";
import { notifications } from "@mantine/notifications";

const form={
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    accountType:"APPLICANT"
}

const SignUp=()=>{

    const [data,setData]=useState(form);
    const [loading,setLoading]=useState(false);
    const [formError,setFormError]=useState(form);
    const navigate=useNavigate();
    const handleChange=(event)=>{
        
        if(typeof(event)=="string"){
            setData({...data,accountType:event});
            return;
        }
        let name=event.target.name,value=event.target.value;
        setData({...data,[name]:value});
        setFormError({...formError,[name]:signupValidation(name,value)})

        if(name=="password" && data.confirmPassword!==""){
            let err=""
            if(data.confirmPassword!==value)err="Password not match";
            setFormError({...formError,[name]:signupValidation(name,value),confirmPassword:err})
        }
        if(name==="confirmPassword"){
            if(data.password!==value)setFormError({...formError,[name]:"Password not match"})
            else setFormError({...formError,confirmPassword:""});
        }

    }

    const handleSubmit=()=>{
        
        let valid=true,newFormError={};
        for(let key in data){
            if(key==="accountType")continue;
            if(key!=="conformPassword")newFormError[key]=signupValidation(key,data[key]);
            else if(data[key]!==data["password"])newFormError[key]="Password not match";
            if(newFormError[key]!=="")valid=false;

        }
        setFormError(newFormError)

        if(valid===true){
            setLoading(true);
            registerUser(data).then((res)=>{

                setData(form);
                notifications.show({
                    title: 'Registered Successfully',
                    message: 'Redirecting to login page...',
                    withCloseButton:true,
                    icon:<IconCheck style={{width:"90%",height:"90%"}}/>,
                    color:"green",
                    withBorder:true,
                    className:"!border-green-300"
    
                })
                setTimeout(()=>{
                    setLoading(false);
                    navigate("/login");
                },2000)
            }).catch((err)=>{
                setLoading(false);
                console.log(err);
                notifications.show({
                    title: 'Registered Failed',
                    message: err.response.data.errorMessage,
                    withCloseButton:true,
                    icon:<IconX style={{width:"90%",height:"90%"}}/>,
                    color:"red",
                    withBorder:true,
                    className:"!border-red-300"
                })}
            
            );
        }
    }

    return(
        <>
        <LoadingOverlay visible={loading}  className="translate-x-1/2" zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} loaderProps={{ color: 'red', type: 'bars' }} />
        <div className="w-full md:w-1/2 md:px-20 p-10 md:gap-3 flex flex-col justify-center" >
            <div className="text-sm md:text-2xl font-semibold">Create Account</div>
            <TextInput value={data.name} onChange={handleChange} name="name" error={formError.name} withAsterisk label="Full Name" placeholder="Your Name"/>
            <TextInput value={data.email} onChange={handleChange} name="email" error={formError.email} withAsterisk leftSection={<IconAt className="w-4"/>} label="Your email" placeholder="Your email"/>
            <PasswordInput value={data.password} onChange={handleChange} name="password" error={formError.password} withAsterisk leftSection={<IconLock className="w-4"/>} label="Password" placeholder="Password" />
            <PasswordInput value={data.confirmPassword} onChange={handleChange} name="confirmPassword" error={formError.confirmPassword} withAsterisk leftSection={<IconLock className="w-4"/>} label="Confirm Password" placeholder="Confirm Password" />

            <Radio.Group value={data.accountType} onChange={handleChange}  label="You Are?"  withAsterisk>
                <Group mt="xs">
                    <Radio className="p-3 border has-[:checked]:bg-red-300/15  has-[:checked]:border-red-700 border-red-200 rounded-lg" color="red" value="APPLICANT" label="Applicant" />
                    <Radio className="p-3 border has-[:checked]:bg-red-300/15  has-[:checked]:border-red-700 border-red-200 rounded-lg" color="red" value="EMPLOYER" label="Employer" />

                </Group>
            </Radio.Group>

            <Checkbox m={"xs"} color="red" label={<>I agree {' '} <Anchor className="text-red-600" > terms and conditions</Anchor></>} />
            <Button loading={loading} onClick={handleSubmit} color="red" variant="filled">Sign Up</Button>
            <div className="mx-auto p-1">Have an Account? <span onClick={()=>{navigate("/login");setFormError(form);setData(form)}}  className="text-red-900 cursor-pointer"> Login</span></div>
        </div>
        </>

    );
}
export default SignUp;