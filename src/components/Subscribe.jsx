import React from 'react';

const Subscribe = () => {
    return (
        <div className=''>
            <div className='border border-gray-200'>
                <div className="grid grid-cols-1 sm:grid-cols-2 rounded-lg h-uto  bg-white bg-gradient-to-l from-primary to-transparent">

                    <div  data-aos="fade-right" className='p-5 flex justify-center items-center'>
                        <div>
                            <h2 className=' text-primary text-center font-bold text-3xl'>Subscribe for Exclusive Sales & News</h2>
                            <div className='w-full flex justify-center items-center my-5'>
                                <div className='w-full md:w-[350px] flex justify-center items-center'>
                                    <form className='w-full'>
                                        <input required type="text" placeholder="Type here" className="input w-full border bg-gray-100 my-2" />
                                        <input required type="text" placeholder="Type here" className="input w-full border bg-gray-100 my-2" />
                                        <button className='btn btn-primary text-white w-full'>Subscribe</button>


                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div  data-aos="fade-left" className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/HDgpjLZ/1000-F-245925706-M3i2np63-UOp9k-N1s-De-Gnky-G3-YNNW6u-VI-removebg-preview.png" alt="" />

                    </div>


                </div>
            </div>

        </div>
    );
};

export default Subscribe;