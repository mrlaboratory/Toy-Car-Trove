import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const AllToys = () => {
    useTitle('All Toys')
    const loaderData = useLoaderData()
    const [data, setData] = useState(loaderData)
    const [q,setQ] = useState('')
    const queryRef = useRef('')

    const handlechange = () => {
       const query =  queryRef.current.value;
       setQ(query)
       console.log(query);
    }

    // useEffect(()=> {
    //     fetch(`http://localhost:3000/toysByText/${q}`)
    //     .then(res => res.json())
    //     .then(d => {
    //         setData(d)
    //     })
    // },[q])



    console.log(data)
    return (
        <div className='p-3 container mx-auto'>
            <h2 className='text-center my-3 font-bold text-2xl'>All toys</h2>
            <div className='p-5 flex justify-center items-center'>
            <input type="text" ref={queryRef} onChange={()=> handlechange()} placeholder="Search toy.." className="input w-full sm:w-[500px] border border-gray-200" />
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra  w-full border border-gray-200">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Avilable Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((toy,i) => <tr key={toy._id}>
                                    <th>{toy.itemName}</th>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}$</td>
                                    <td>{toy.quantity}</td>
                                    <td> <Link to={`/toy/${toy._id}`} className='btn btn-sm btn-primary text-white'>View Details</Link> </td>
                                </tr>)

                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllToys;