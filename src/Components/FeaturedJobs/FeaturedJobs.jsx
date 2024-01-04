import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const[dataLength, setDataLength]  = useState(4);

    useEffect(()=> {

        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data));
    },[])

    return (
        <div className="">
            <h2 className="text-2xl md:text-5xl text-center font-bold">
            Featured Jobs: {jobs.length}
            </h2>
            <p className="text-center text-[#757575] text-xs md:text-base my-10">Explore thousands of job opportunities with all the information you need. 
                Its your future</p>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    {
                    jobs.slice(0,dataLength).map(job=> <Job key ={job.id} job={job}></Job>)
                    }
                </div>

               <div>
               <div className={dataLength == jobs.length ?'hidden' : 'flex justify-center items-center my-8'}>
               <button onClick={()=> setDataLength(jobs.length)} className="btn btn-primary text-center ">Show All Jobs</button>
            
               </div>
               </div>
        </div>
    );
};

export default FeaturedJobs;