import { Checkbox, Textarea,Button } from "@mantine/core";
import { fields } from "../../Data/Profile";
import { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Sercvices/NotificationService";

const ExpInput=(props)=>{
    const select=fields;
    const dispatch=useDispatch();
    const profile=useSelector((state)=>state.profile);
    useEffect(() => {
        if (!props.add) {
            form.setValues({
                title: props.title,
                company: props.company,
                location: props.location,
                description: props.description,
                startDate: new Date(props.startDate),
                endDate: new Date(props.endDate),
                working: props.working,
            });
        }
    }, [props]);
    const form=useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            title:'',
            company:'',
            location:'',
            description:'',
            startDate:new Date(),
            endDate:new Date(),
            working:false,
        },
        validate:{
            title:isNotEmpty("Title is required"),
            company:isNotEmpty("Company is required"),
            location:isNotEmpty("Location is required"),
            description:isNotEmpty("Description is required"),
        }
    });
    const handleSave=()=>{
        form.validate();
        if(!form.isValid())return;
            let exp=[...profile.experiences];
            if(props.add){
                exp.push(form.getValues());
                exp[exp.length-1].startDate=exp[exp.length-1].startDate;
                exp[exp.length-1].endDate=exp[exp.length-1].endDate;

            }
            else{
                exp[props.index]=form.getValues();
                exp[props.index].startDate=exp[props.index].startDate;
                exp[props.index].endDate=exp[props.index].endDate;

            }
            let updatedProfile={...profile,experiences:exp};
            props.setEdit(false);
            dispatch(changeProfile(updatedProfile));
            window.location.reload();
            successNotification("Success","Your Experience has been updated successfully");
            

        
  };
    return(
        <div className="flex flex-col gap-3">
            <div className="md:text-lg font-semibold">{props.add?"Add ":"Edit "}Experience</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="title" {...select[0]}/>
                <SelectInput form={form} name="company" {...select[1]}/>
            </div>
            <SelectInput form={form} name="location" {...select[2]}/>
            <Textarea {...form.getInputProps("description")} form={form} name="description" label="Describtion" placeholder='Enter About your Job..' />
            <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput {...form.getInputProps("startDate")} name="startDate" withAsterisk maxDate={form.getValues().endDate || undefined } label="Start date" placeholder="Pick date"   />
            <MonthPickerInput {...form.getInputProps("endDate")} name="endDate" disabled={form.getValues().working} withAsterisk minDate={ form.getValues().startDate ||undefined} maxDate={new Date()} label="End date" placeholder="Pick date" />
            
            </div>
            <Checkbox checked={form.getValues().working} onChange={(event)=>form.setFieldValue("working",event.currentTarget.checked)} autoContrast label="Currently Working Here"/>
                <div className="flex gap-5">
                    <Button onClick={handleSave} color="green.8"  variant="outline">Save</Button>
                    <Button onClick={()=>props.setEdit(false)}  color="red" variant="light">Cancel</Button>
                </div>
        </div>

    );
}
export default ExpInput;