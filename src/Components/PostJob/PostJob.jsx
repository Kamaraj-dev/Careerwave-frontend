
import { TagsInput,Button, NumberInput, Textarea } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { content, fields } from "../../Data/JobPost";
import SelectInput from "./SelectInput";
import  RichTextEditor from "./RichTextEditor";
import { getJob, postJob } from "../../Sercvices/JobService";
import { errorNotification, successNotification } from "../../Sercvices/NotificationService";
import {  useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


const PostJob=()=>{
    const {id}=useParams();
    const [editorData,setEditorData]=useState(content);
    const user = useSelector(state => state.user);
    const navigate=useNavigate();
    const select=fields;
    useEffect(()=>{
        window.scrollTo(0,0);
        if(id!=="0"){
            getJob(id).then((res)=>{
                form.setValues(res);
                setEditorData(res.description);
            }).catch((err)=>{
                console.log(err);
            })
        }else{ 
            form.reset();
            setEditorData(content)
        }
    },[id])
    const form=useForm({
        model:'controlled',
        validateInputOnChange:true,
        initialValues:{
            jobTitle:'',
            company:'',
            experience:'',
            jobType:'',
            location:'',
            packageOffered:'', 
            skillsRequired:[],
            about:'',
            description:content,
        },
        validate:{
            jobTitle:isNotEmpty('Job Title is required'),
            company:isNotEmpty('Company is required'),
            experience:isNotEmpty('Experience is required'),
            jobType:isNotEmpty('Job Type is required'),
            location:isNotEmpty('Location is required'),
            packageOffered:isNotEmpty('Package Offered is required'),
            skillsRequired:isNotEmpty('Skills Required is required'),
            about:isNotEmpty('About is required'),
            description:isNotEmpty('Description is required')
        }
    });
    const handlePost=()=>{
        form.validate();
        if(!form.isValid())return;
        postJob({...form.getValues(),id,postedBy:user.id,jobStatus:"ACTIVE"}).then((res)=>{
            successNotification('Success','Job has been posted successfully');
            navigate(`/posted-job/${res.id}`);
        }).catch((err)=>{
            console.log(err);
            errorNotification('Error',err.response.data.message );
        })

    }
    const handleDraft=()=>{
        postJob({...form.getValues(),postedBy:user.id,jobStatus:"DRAFT"}).then((res)=>{
            successNotification('Success','Job Drafted successfully');
            navigate(`/posted-job/${res.id}`);
        }).catch((err)=>{
            console.log(err);
            errorNotification('Error',err.response.data.message );
        })

    }
    return(
        <div className='p-4 w-4/5 mx-auto'>
            <div className="md:text-2xl font-semibold mb-5">Post a Job</div>
            <div className="flex flex-col gap-3">
                <div className="md:flex gap-10 md:[&>*]:w-1/2">
                    <SelectInput form={form} name="jobTitle" {...select[0]}/>
                    <SelectInput form={form} name="company" {...select[1]}/>
                </div>
                <div className="md:flex gap-10 md:[&>*]:w-1/2">
                    <SelectInput form={form} name="experience" {...select[2]}/>
                    <SelectInput form={form} name="jobType" {...select[3]}/>
                </div>
                <div className="md:flex gap-10 md:[&>*]:w-1/2">
                    <SelectInput form={form} name="location" {...select[4]}/>
                    <NumberInput {...form.getInputProps('packageOffered')} hideControls clampBehavior="strict" label="Salary" placeholder="Enter PackageOffered" min={1} max={200} withAsterisk/>
                </div>
                <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skills" placeholder="Enter Skill" splitChars={[',',' ','|']} clearable acceptValueOnBlur />
                <Textarea {...form.getInputProps('about')} withAsterisk  label="About Job" placeholder='Enter About Job...' />

                <div className="[&_button[data-active='true']]:bg-red-100 [&_button[data-active='true']]:text-red-800">
                    <div className="font-semibold">Job Description <span className="text-red-500">*</span></div>
                    <RichTextEditor form={form} data={editorData}/>
                </div>
                <div className="flex gap-4"> 
                <Button onClick={handlePost} color="red" variant="light" >Publish Job</Button>
                <Button onClick={handleDraft} color="red" variant="outline" >Save as Draft</Button>
                </div>
            </div>
            

        </div>
    );
}
export default PostJob;