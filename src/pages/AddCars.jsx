import React, { useState } from 'react';

const AddCars = () => {
    const [rating, setRating] = useState('');

    const handleRatingChange = (event) => {
      setRating(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Rating:', rating);
      // You can now send the rating value to your backend server for processing or store it locally in your React component state or context.
    };
    return (
        <div className='p-5'>
            <h2 className='text-center my-3 font-bold text-2xl'>Add new toy car</h2>
            <div className='flex justify-center'>

                <form className='p-2 w-full sm:w-[500px]'>
                    <input required type="text" placeholder="Toy car name .." className="input w-full border border-gray-200" />
                    <div className='flex flex-col sm:flex-row gap-2 my-2'>
                        <input required type="text" placeholder="Seller name " className="input w-full border border-gray-200" />
                        <input required type="text" placeholder="Seller email " className="input w-full border border-gray-200" />


                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 my-2'>

                        <div className=''>
                            <select className="select w-full">
                                <option disabled selected>Toy category</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>

                        <input required type="number" placeholder="Price " className="input border border-gray-200" />


                    </div>

                    <div className='flex flex-col sm:flex-row gap-2 my-2'>
                    <input className="input border border-gray-200" defaultValue={4.5} type="number" step="0.1" min="0" max="5"  onChange={handleRatingChange} />
                        <input required type="number" placeholder="Quantity  " className="input w-full border border-gray-200" />


                    </div>
                    <textarea name="description" placeholder='Description ...' id="" cols="30" rows="10" className="input w-full p-5 h-[200px] border border-gray-200"></textarea>

                    <button className='btn btn-primary text-white w-full'>Add toy car</button>

                  

                </form>


            </div>
        </div>
    );
};

export default AddCars;