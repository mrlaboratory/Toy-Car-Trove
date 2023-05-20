import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/Ai';
import { BsStarHalf } from 'react-icons/Bs';
import Rating from 'react-rating';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import { toast } from 'react-hot-toast';


const Category = () => {
    const {user} = useContext(AuthContext)
    const [data, setData] = useState([])
    const [category, setCategory] = useState('Classic Cars')
    const navigate = useNavigate()
    const location = useLocation()
    const handleLoadData = cat => {
        setData([])
        setCategory(cat)

    }
    const handleNavigate = id => {
        if(user){
            navigate(`/toy/${id}`)
        }else{
            toast.error('You have to log in first to view details')
            navigate(`/toy/${id}`, { state: location })
        }
    }

    useEffect(() => {
        category && fetch(`https://toy-cars-server.onrender.com/toysByCategory/${category}`)
            .then(res => res.json())
            .then(d => {
                setData(d)
            })

    }, [category])

    const catJsxData = <div>
        <div id='category' className='min-h-[300px] my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-gray-500'>
            {
                data?.map((toy) => <div data-aos="zoom-in" key={toy._id} className='border-2 border-gray-200 bg-white rounded-lg p-3 flex flex-col justify-between'>
                    <img className='rounded-lg' src={toy.itemPicture} alt="" />
                    <div>
                        <h2 className='text-xl my-2 font-bold '>{toy.itemName}</h2>
                        <h3>Price : {toy.price}$</h3>
                        <div className='my-2 flex gap-2'>
                            Rating : ({toy.rating})<div className='flex gap-1 justify-center items-center'>


                                <Rating
                                    placeholderRating={toy.rating}
                                    readonly={true}
                                    emptySymbol={<AiOutlineStar className='text-[#FFD700]'></AiOutlineStar>}
                                    placeholderSymbol={<AiFillStar className='text-[#FFD700]'></AiFillStar>}
                                    fullSymbol={ <BsStarHalf className='text-[#FFD700]'></BsStarHalf>}
                                />
                            </div>
                        </div>
                        <button onClick={() => handleNavigate(toy._id)} className='btn btn-sm btn-primary text-white w-full'>View Details</button>
                       
                    </div>

                </div>)
            }


        </div>

    </div>



    return (

        <div className='my-5 p-5'>
            <h1 className='my-3 text-3xl font-bold text-center uppercase'>Shop by category</h1>
            <div className='my-5 p-5'>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleLoadData('Classic Cars')}>Classic Cars</Tab>
                        <Tab onClick={() => handleLoadData('Racing Cars')}>Racing Cars</Tab>
                        <Tab onClick={() => handleLoadData('Sports Cars')}>Sports Cars</Tab>
                    </TabList>

                    <TabPanel>
                        {catJsxData}
                    </TabPanel>
                    <TabPanel>
                        {catJsxData}
                    </TabPanel>
                    <TabPanel>
                        {catJsxData}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;