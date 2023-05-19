import React, { useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/Ai';
import { BsStarHalf } from 'react-icons/Bs';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const ToyDetails = () => {
    useTitle('Toy Details')
    const toy = useLoaderData()
  
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);

    return (
        <div className='p-5 container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <img  data-aos="fade-right" className=' rounded-lg border-2 border-gray-200 w-full' src={toy.itemPicture} alt="" />
                <div  data-aos="fade-left" className='text-gray-600 w-full h-full bg-white rounded-lg border border-gray-200'>
                <h2 className='  text-center w-full border-b-2 border-primary text-3xl font-bold py-2'>{toy.itemName}</h2>
                <div className='p-5 text-lg relative overflow-hidden'>
                    <h3><span className='font-bold mt-1'>Toy Item Name :</span> {toy?.itemName}</h3>
                    <h3><span className='font-bold mt-1'>Seller Name :</span> {toy?.sellerName || 'User'}</h3>
                    <h3><span className='font-bold mt-1'>Seller Email :</span> {toy?.sellerEmail}</h3>
                    <h3><span className='font-bold mt-1'>Sub-category :</span> {toy?.category}</h3>
                    <h3><span className='font-bold mt-1'>Price :</span> {toy?.price}$</h3>
                    <h3><span className='font-bold mt-1'>Rating :</span> ({toy?.rating}) 
                    <Rating
                                    placeholderRating={toy?.rating}
                                    readonly={true}
                                    emptySymbol={<AiOutlineStar className='text-[#FFD700]'></AiOutlineStar>}
                                    placeholderSymbol={<AiFillStar className='text-[#FFD700]'></AiFillStar>}
                                    fullSymbol={ <BsStarHalf className='text-[#FFD700]'></BsStarHalf>}
                                />
                    </h3>
                    <h3><span className='font-bold mt-1'>Available quantity :</span> {toy?.quantity}</h3>

                   
                </div>
                </div>

            </div>
            <div data-aos="zoom-in" className='text-gray-600 w-full p-5 border border-gray-200 text-lg bg-white rounded-lg my-5'>
            <p><span className='font-bold'>Description :</span> {toy?.description}</p>
                
            </div>
            
        </div>
    );
};

export default ToyDetails;