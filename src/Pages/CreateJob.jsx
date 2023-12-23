import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState([null])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        console.log(data);
    };

    const option = [
        { value: "JavaScript", label: "JavaSc,ript" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "React", label: "React" },
        { value: "Node", label: "Node" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Redux", label: "Redux" },
    ]

    console.log(watch("example"));

    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            {/* form  */}
            <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* 1st row */}
                    <div className="create-job-flex ">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Job title</label>
                            <input type="text" defaultValue="Web Developer"
                                {...register("JobTitle")} className="create-job-input" />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Company Name</label>
                            <input type="text" placeholder="Ex-Microsoft"
                                {...register("companyName")} className="create-job-input" />
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="create-job-flex ">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Minimum Salary</label>
                            <input type="text" placeholder="$20K" {...register("minPrice")} className="create-job-input" />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Maximum Salary</label>
                            <input type="text" placeholder="$80K" {...register("maxPrice")} className="create-job-input" />
                        </div>
                    </div>

                    {/* 3rd row  */}
                    <div className="create-job-flex ">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Salary Type</label>
                            <select {...register("salaryType")} className="create-job-input">
                                <option value="">Choose your salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Job location</label>
                            <input type="text" placeholder="Ex: India" {...register("jobLocation")} className="create-job-input" />
                        </div>
                    </div>

                    {/* 4th row */}

                    <div className="create-job-flex ">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Job Posting Date</label>
                            <input type="date" placeholder="Ex: 2023-11-03" {...register("postingDate")} className="create-job-input" />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Experience Level</label>
                            <select {...register("experienceLevel")} className="postingDate">
                                <option value="">Choose your Experience</option>
                                <option value="NoExperience">Hourly</option >
                                <option value="Internship">Internship</option>
                                <option value="Work Remotely">Work From Home</option>
                            </select>
                        </div>
                    </div>

                    {/* 5th row */}
                    <div>
                        <label className="block mb-2 text-lg">Required Skills Set</label>
                        <CreatableSelect
                            defaultInputValue={selectedOption}
                            onChange={setSelectedOption}
                            options={option}
                            isMulti
                            className="create-job-input py-4"
                        />
                    </div>

                    {/* 6th row  */}
                    <div className="create-job-flex ">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Company Logo</label>
                            <input type="url" placeholder="Paste your company log URL: https://www.google.com/" {...register("companyLogo")} className="create-job-input" />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Employment Type</label>
                            <select {...register("employmentType")} className="postingDate">
                                <option value="">Choose your Experience</option>
                                <option value="Full-time">Full-time</option >
                                <option value="Part-time">Part-time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>

                    {/* 7th row  */}
                    <div className="w-full">

                        <label className="block mb-2 text-lg">Job Description</label>
                        <textarea className="w-full pl-3 py-1.5 focus-outline-none placeholder:text-gray-700"
                            rows={6}
                            defaultValue={"Write the description about the company"}
                            placeholder="Job Description"
                            {...register("description")} />
                    </div>

                    {/* last row  */}
                    <div className="w-full">
                        <label className="block mb-2 text-lg">Job Posted By</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            {...register("postedBy")}
                            className="creat-job-input"
                        />
                    </div>

                    <input type="submit" className="my-5 block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer " />
                </form>
            </div>
        </div>
    );
};

export default CreateJob;
