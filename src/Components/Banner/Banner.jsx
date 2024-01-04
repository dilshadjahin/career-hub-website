

const Banner = () => {
  

    
    return (
        
            <div className="grid  md:grid-cols-2 grid-cols-1 my-16 gap-10">
                <div className="px-2">
                    <h1 className=" text-3xl md:text-5xl font-bold font-Manrope">One Step <br />Closer To Your <br /><span className="text-[#7E90FE]">Dream Job</span></h1>
                    <p className="text-[#757575] text-base md:text-lg leading-8 my-6">Explore thousands of job opportunities with all the information you need.
                        Its your future.Come find it. Manage all your job application from start to finish.</p>
                        <button className="bg-[#7E90FE] text-white text-lg font-semibold px-5 py-2 rounded-lg">Get Started</button>
                </div>
                <div >
                    <img src="../../../src/assets/banner-img/user.png" alt="" className="w-10/12 md:w-full" />
                </div>
            </div>

       
    );
};

export default Banner;