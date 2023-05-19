import React from 'react';

const LatestBlog = () => {
    return (
        <div className='p-5'>
            <h2 className='text-center my-6 font-bold text-3xl uppercase text-gray-600 white'>Latest Blog</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                <div className='p-3 rounded-lg border border-gray-200 bg-white flex flex-col justify-between ' data-aos="flip-down">
                    <img className='w-full rounded-lg' src="https://htmldemo.net/kidol/kidol/assets/img/blog/1.jpg" alt="" />
                    <div className='mt-3'>
                    <h3 className='my-1'>Published : 22 May 2023 by <span className='text-primary'>Alex</span> </h3>
                        <h2 className='text-xl my-3  text-gray-600'>Baby Planet toys makes learning so easy</h2>
                        
                        <button className='text-white btn btn-primary btn-sm w-full'>Read more </button>

                    </div>

                </div>
                <div className='p-3 rounded-lg border border-gray-200 bg-white flex flex-col justify-between' data-aos="flip-down">
                    <img className='w-full rounded-lg' src="https://htmldemo.net/kidol/kidol/assets/img/blog/2.jpg" alt="" />
                    <div className='mt-3'>
                    <h3 className='my-1'>Published : 20 May 2023 by <span className='text-primary'>Jisan</span> </h3>
                        <h2 className='text-xl my-3  text-gray-600'>Mother revolves around her children</h2>
                        
                        <button className='text-white btn btn-primary btn-sm w-full'>Read more </button>

                    </div>

                </div>
                <div className='p-3 rounded-lg border border-gray-200 bg-white flex flex-col justify-between' data-aos="flip-down">
                    <img className='w-full rounded-lg' src="https://htmldemo.net/kidol/kidol/assets/img/category/4.png" alt="" />
                    <div className='mt-3'>
                    <h3 className='my-1'>Published : 22 May 2023 by <span className='text-primary'>Alex</span> </h3>
                        <h2 className='text-xl my-3  text-gray-600'>Baby Planet toys makes learning so easy</h2>
                        
                        <button className='text-white btn btn-primary btn-sm w-full'>Read more </button>

                    </div>

                </div>
                <div className='p-3 rounded-lg border border-gray-200 bg-white flex flex-col justify-between' data-aos="flip-down">
                    <img className='w-full rounded-lg' src="https://htmldemo.net/kidol/kidol/assets/img/blog/3.jpg" alt="" />
                    <div className='mt-3'>
                    <h3 className='my-1'>Published : 22 May 2023 by <span className='text-primary'>Alex</span> </h3>
                        <h2 className='text-xl my-3  text-gray-600'>Baby Planet toys makes learning so easy</h2>
                        
                        <button className='text-white btn btn-primary btn-sm w-full'>Read more </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default LatestBlog;