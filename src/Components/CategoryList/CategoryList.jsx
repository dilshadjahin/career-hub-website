

const CategoryList = () => {
    return (
        <div className="my-10">

            <h2 className="text-2xl md:text-5xl text-center font-bold">
                Job Category List
            </h2>
            <p className="text-center text-[#757575] text-xs md:text-base  my-6">Explore thousands of job opportunities with all the information you need.
                Its your future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4  my-16 text-center">
                <div>
                    
                    <h6 className="text-xl font-bold text-[#474747]">Account & Finance</h6>
                    <p className="text-base text-[#A3A3A3]">300 Jobs Available</p>
                </div>
                <div>
                    <img src="../../assets/icons/creative.png" alt="" />
                    <h6 className="text-xl font-bold text-[#474747]">Creative Design</h6>
                    <p className="text-base text-[#A3A3A3]">100+ Jobs Available</p>
                </div>
                <div>
                    <img src="../../assets/icons/accounts.png" alt="" />
                    <h6 className="text-xl font-bold text-[#474747]">Marketing & Sales</h6>
                    <p className="text-base text-[#A3A3A3]">150 Jobs Available</p>
                </div>
                <div>
                    <img src="../../assets/icons/accounts.png" alt="" />
                    <h6 className="text-xl font-bold text-[#474747]">Engineering Job</h6>
                    <p className="text-base text-[#A3A3A3]">224 Jobs Available</p>
                </div>
            </div>

        </div>
        
    );
};

export default CategoryList;