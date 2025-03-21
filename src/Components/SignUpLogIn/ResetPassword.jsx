import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePass, sendOtp, verifyOtp } from "../../Sercvices/UserService";
import { signupValidation } from "../../Sercvices/FormValidation";
import { errorNotification, successNotification } from "../../Sercvices/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword=(props)=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [passErr,setPassErr]=useState("")
    const [otpSent,setOtpSent] = useState(false);
    const [otpSending,setOtpSending]=useState(false);
    const [verified, setVerified] = useState(false);
    const [resendLoader,setResendLoader]=useState(false);
    const [seconds, setSeconds] = useState(60);
    const interval=useInterval(()=>{
        if(seconds===0){
            setResendLoader(false);
            setSeconds(60);
            interval.stop();
        }else setSeconds((s)=>s-1)
    },1000);

    const handleSendOtp=()=>{
        setOtpSending(true);
        sendOtp(email).then(res=>{
            console.log(res);
            successNotification("OTP send Successfully","Enter OTP to Reset");
            setOtpSent(true);
            setOtpSending(false);
            setResendLoader(true);
            interval.start();
        }).catch((err)=>{
            console.log(err);
            setOtpSending(false);
            errorNotification("OTP send failed",err.response.data.errorMessage);
        })
    }
    const handleVerifyOtp=(otp)=>{
        verifyOtp(email,otp).then((res)=>{
            console.log(res);
            successNotification("OTP Verified","Enter new password")
            setVerified(true);
        }).catch((err)=>{
            console.log(err);
            errorNotification("OTP Verification failed",err.response.data.errorMessage);
        })
    }
    const resendOtp=()=>{
        if(resendLoader)return;
        handleSendOtp();
    }
    const changeEmail=()=>{
        setOtpSent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
    }
    const handleResetPassword=()=>{
        changePass(email,password).then((res)=>{
            console.log(res);
            successNotification("Password Reset Successfully","Login with new Password");
            props.close();
        }).catch((err)=>{
            console.log(err);
            errorNotification("Password Reset Failed",err.response.data.errorMessage)
        })
    }
    return(
        <Modal opened={props.opened} onClose={props.close} title="Reset Password" >
            <div className="flex flex-col gap-6">
            <TextInput value={email} size="md" onChange={(e)=>setEmail(e.target.value)} name="email" withAsterisk leftSection={<IconAt className="w-4"/>} rightSection={<Button loading={otpSending && !otpSent} size="xs" className="mr-1" onClick={handleSendOtp} color="red" disabled={email===""||otpSent} variant="filled">SendOTP</Button>} rightSectionWidth="xl" label="Your email" placeholder="Your email"/>
            {otpSent && <PinInput onComplete={handleVerifyOtp} length={6} className="mx-auto" size="md" gap="lg" type="number" />}
            {otpSent && !verified && <div className="flex gap-2">
                <Button fullWidth loading={otpSending}  onClick={resendOtp} color="red" variant="light">{resendLoader?seconds:"Resend"}</Button>
                <Button fullWidth onClick={changeEmail} color="red" variant="filled">Change Email</Button>
            </div> }
            {verified && <PasswordInput value={password} error={passErr} onChange={(e)=>{setPassword(e.target.value); setPassErr(signupValidation("Password",e.target.value))}} name="password" withAsterisk leftSection={<IconLock className="w-4"/>} label="Password" placeholder="Password" />}
            {verified && <Button onClick={handleResetPassword} color="red" variant="filled">Change Password</Button>}
            </div>
        </Modal>
    ); 
}
export default ResetPassword;