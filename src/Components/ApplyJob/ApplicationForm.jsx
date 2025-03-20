import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { isNotEmpty, useForm } from "@mantine/form";
import { getBase64 } from "../../Sercvices/Utilities";
import { applyJob } from "../../Sercvices/JobService";
import { useNavigate, useParams } from "react-router-dom";
import { errorNotification, successNotification } from "../../Sercvices/NotificationService";
import { useSelector } from "react-redux";

const ApplicationForm = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const user=useSelector(state=>state.user);
    const [preview,setPreview]=useState(false);
    const [submit,setSubmit]=useState(false);
    const handlePerview=()=>{
        form.validate();
        window.scrollTo({top:0,behavior:'smooth'})
        if(!form.isValid()) return;
        setPreview(!preview);
    }
    const handleSubmit=async()=>{
        setSubmit(true);
        let resume=await getBase64(form.values.resume);
        let applicant={...form.getValues(),applicantId:user.id,resume:resume.split(',')[1]};
        applyJob(id,applicant).then((res)=>{
            setSubmit(false);
            successNotification("Success","Application Submitted Successfully");
            navigate("/job-history");
        }).catch((err)=>{
            setSubmit(false);
            errorNotification("Error",err.response.data.errorMessage);
        });
    }
    const form=useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
        name:'',
        email:'',
        phone:'',
        website:'',
        resume:null,
        coverLetter:'',
        },
        validate:{
            name:isNotEmpty("Name is required"),
            email:isNotEmpty("Email is required"),
            phone:isNotEmpty("Phone is required"),
            website:isNotEmpty("Website is required"),
            resume:isNotEmpty("Resume is required"),
        }
    });
    return (
        <div>
            <LoadingOverlay visible={submit} zIndex={1000} overlayProps={{radius:'lg',blur:'2'}} loaderProps={{color:'blue',type:'oval'}} />
            <div className="text-xl font-semibold mb-5">Submit Your Application</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&_*]:w-4/5">
                    <TextInput {...form.getInputProps("name")} readOnly={preview} className={`${preview?"font-semibold":""}`} variant={preview?"unstyled":"default"} withAsterisk label='Full Name' placeholder='Enter Name'/>
                    <TextInput {...form.getInputProps("email")} readOnly={preview} className={`${preview?"font-semibold":""}`} variant={preview?"unstyled":"default"} withAsterisk label='Email' placeholder='Enter Email'/>
                </div>
                <div className="flex gap-10 [&_*]:w-4/5">
                    <NumberInput {...form.getInputProps("phone")} readOnly={preview} className={`${preview?"font-semibold":""}`} variant={preview?"unstyled":"default"} withAsterisk hideControls min={0} max={9999999999} clampBehavior="strict" label='Phone.No' placeholder='Enter Phone.No'/>
                    <TextInput {...form.getInputProps("website")} readOnly={preview} className={`${preview?"font-semibold":""}`} variant={preview?"unstyled":"default"} withAsterisk label='Personal Website' placeholder='Enter Url'/>
                </div>
                <FileInput {...form.getInputProps("resume")} accept="application/pdf" readOnly={preview} className={`${preview?"font-semibold":""}`} variant={preview?"unstyled":"default"} withAsterisk leftSection={<IconPaperclip stroke={1.5}/>} label='Attach your Resume' placeholder='Upload Resume' leftSectionPointerEvents="none"/>
                <Textarea {...form.getInputProps("coverLetter")} readOnly={preview} className={`${preview?"font-semibold":""}`} variant={preview?"unstyled":"default"}  placeholder="Type something about yourself..." label="Cover Letter" autosize minRows={4}/>
                {!preview && <Button onClick={handlePerview} color="red" variant="light" >Preview</Button>}
                {preview && <div className="flex gap-4 [&_*]:w-fit [&_*]:text-center">
                    <Button fullWidth onClick={handlePerview} color="red" variant="outline" >Edit</Button>
                    <Button fullWidth onClick={handleSubmit} color="red" variant="light" >Submit</Button>
                    </div>}
            </div>
        </div>
    )
}
export default ApplicationForm;