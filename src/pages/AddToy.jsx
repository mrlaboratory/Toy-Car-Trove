import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const AddToy = () => {

    const { user } = useContext(AuthContext)
    const [selectedCarCategory, setSelectedCarCategory] = useState("");


    const handleCategoryChange = (event) => {
        setSelectedCarCategory(event.target.value);
    };



    return (
        <div className='p-5'>
            <h2 className='text-center my-3 font-bold text-2xl'>Add new toy car</h2>
            <div className='flex justify-center'>

                <form className='p-2 w-full sm:w-[500px]'>
                    <input required type="text"  placeholder="Toy car name .." className="input w-full border border-gray-200" />
                    
                    <div className='flex flex-col sm:flex-row gap-2 my-2'>
                        
                        <input required type="text" value={user?.displayName} placeholder="Seller name " className="input w-full border border-gray-200" />
                        <input required type="text"  value={user?.email} placeholder="Seller email " className="input w-full border border-gray-200" />


                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 my-2'>

                        <div className=''>
                        <select required className="select w-full" id="carCategory" value={selectedCarCategory} onChange={handleCategoryChange}>
        <option value="">Select a car type</option>
        <option value="Classic Cars">Classic Cars</option>
        <option value="Racing Cars">Racing Cars</option>
        <option value="Collectibles Cars">Collectibles Cars</option>
        <option value="Vintage Cars">Vintage Cars</option>
        <option value="Muscle Cars">Muscle Cars</option>
        <option value="Sports Cars">Sports Cars</option>
        <option value="Exotic Cars">Exotic Cars</option>
        <option value="Trucks and SUVs">Trucks and SUVs</option>
      </select>

                          
                        </div>

                        <input required type="number" placeholder="Price " className="input border border-gray-200" />


                    </div>

                    <div className='flex flex-col sm:flex-row gap-2 my-2'>
                        <input className="input border border-gray-200" defaultValue={4.5} type="number" step="0.1" min="0" max="5" required name='rating' />
                        <input required type="number" placeholder="Quantity" name='quantity' className="input w-full border border-gray-200" />


                    </div>
                    <textarea name="description" placeholder='Description ...' id="" cols="30" rows="10" className="input w-full p-5 h-[200px] border border-gray-200"></textarea>

                    <button className='btn btn-primary text-white w-full'>Add toy car</button>



                </form>


            </div>
        </div>
    );
};

export default AddToy;