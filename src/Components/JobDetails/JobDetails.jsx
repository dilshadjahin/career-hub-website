import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineDollar } from "react-icons/ai";
import { saveJobApplication } from "../../Utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job=> job.id==idInt);
    console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(id);
        toast('you have applied toast successfully');
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-16">Job Details  </h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 my-16">
                   <div className="">
                     <p className="text-base text-[#757575]"><h5 className="text-base font-bold text-[#1A1919]">Job Description:</h5>{job.job_description}</p>
                   </div>
                   <div className="my-6">
                     <p className="text-base text-[#757575]"><h5 className="text-base font-bold text-[#1A1919]">Job Responsibility:</h5>{job.job_responsibility}</p>
                   </div>
                   <div>
                     <p className="text-base text-[#757575]"><h5 className="text-base font-bold text-[#1A1919]">Educational Requirements:</h5>{job.educational_requirements}</p>
                   </div>
                   <div className="my-6">
                     <p className="text-base text-[#757575]"><h5 className="text-base font-bold text-[#1A1919]">Experiences:</h5>{job.experiences}</p>
                   </div>
                </div>


                <div className="border my-16 text-center bg-[#E8E8E8]">
                    <h2 className="text-[#1A1919] text-xl font-bold">Job Details</h2>
                    <hr className=""/>
                    <h2 className="text-[#757575]"><AiOutlineDollar className="text-2xl mr-2" />Salary:</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    <ToastContainer />
                </div>

            </div>

           
        </div>
    );
};

export default JobDetails;