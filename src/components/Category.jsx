import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AiFillStar } from 'react-icons/Ai';
import { BsStarHalf } from 'react-icons/Bs';


const Category = () => {

    const handleLoadData = id => {
        console.log(id)

    }


    return (

        <div className='my-5 p-5'>
            <h1 className='my-3 text-3xl font-bold text-center uppercase'>Shop by category</h1>
            <div className='my-5 p-5'>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleLoadData('Classic Cars')}>Classic Cars</Tab>
                        <Tab onClick={() => handleLoadData('Racing Cars')}>Racing Cars</Tab>
                        <Tab onClick={() => handleLoadData('Collectibles Cars')}>Collectibles Cars</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <div className='my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                                <div className='border-2 border-gray-200 bg-white rounded-lg p-3 '>
                                    <img className='rounded-lg' src="../../public/images/car.jpg" alt="" />
                                    <div>
                                        <h2 className='text-xl my-2'>Name</h2>
                                        <h3>Price : $20</h3>
                                        <div className='my-2 flex gap-2'>
                                            Rating : (4.5)<div className='flex gap-1 justify-center items-center'>
                                                <AiFillStar className='text-[#FFD700]'></AiFillStar>
                                                <AiFillStar className='text-[#FFD700]'></AiFillStar>
                                                <AiFillStar className='text-[#FFD700]'></AiFillStar>
                                                <AiFillStar className='text-[#FFD700]'></AiFillStar>
                                                <BsStarHalf className='text-[#FFD700]'></BsStarHalf>
                                            </div>
                                        </div>
                                        <button className='btn btn-sm btn-primary text-white w-full'>View Details</button>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;