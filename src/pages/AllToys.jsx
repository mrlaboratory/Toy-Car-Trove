import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../auth/AuthProvider';

const AllToys = () => {

    useTitle('All Toys')
    const { user } = useContext(AuthContext)
    const loaderData = useLoaderData()
    const navigate = useNavigate()
    const location = useLocation()
    const [data, setData] = useState()
    const [q, setQ] = useState('')
    const queryRef = useRef('')

    const [totalToys, setTotalToys] = useState(loaderData.totalToys)
    const [limit, setLimit] = useState(20)
    const [activePage, setActivePage] = useState(0)

    const pages = Math.ceil((totalToys / limit))
    let totalPages = pages ? [...Array(pages).keys()] : []
    const perPageArray = [5, 10, 20, 30]




    const handlechange = () => {
        const query = queryRef.current.value;
        setQ(query)
    }

    useEffect(()=> {
        fetch(`https://toy-car-trove-server.vercel.app/allToys?page=${activePage}&limit=${limit}`)
        .then(res => res.json())
        .then(d => {
            setData(d)
        })
    },[limit,activePage])
    useEffect(()=> {
        fetch(`https://toy-car-trove-server.vercel.app/toysByText?text=${q}`)
        .then(res => res.json())
        .then(d => {
            setData(d)
        })
    },[q])

    const handleNavigate = id => {
        if (user) {
            navigate(`/toy/${id}`)
        } else {
            toast.error('You have to log in first to view details')
            navigate(`/toy/${id}`, { state: location })
        }
    }



    return (
        <div className='p-3 container mx-auto'>
            <h2 className='text-center my-3 font-bold text-2xl'>All toys</h2>
            <div className='p-5 flex justify-center items-center'>
                <input type="text" ref={queryRef} onChange={() => handlechange()} placeholder="Search toy.." className="input w-full sm:w-[500px] border border-gray-200" />
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
                                data?.map((toy, i) => <tr key={toy._id}>
                                    <th>{toy?.itemName}</th>
                                    <td>{toy?.sellerName}</td>
                                    <td>{toy?.category}</td>
                                    <td>{toy?.price}$</td>
                                    <td>{toy?.quantity}</td>
                                    <td> <button onClick={() => handleNavigate(toy._id)} className='btn btn-sm btn-primary text-white'>View Details</button> </td>
                                </tr>)

                            }


                        </tbody>
                    </table>
                </div>

            </div>

            <div className='flex justify-center items-center my-5 gap-2'>
                <div className="btn-group">
                    {
                        totalPages?.map(i => <button onClick={() => setActivePage(i)} key={i} className={`btn border-none text-white bg-[#95b3e0] btn-md ${activePage == i ? 'btn-active text-white' : ''}`}>{i+1}</button>)
                    }

                </div>
                <select onChange={(e) => setLimit(e.target.value)} value={limit}  className="select w-[100px] border border-gray-200">

                    {
                        perPageArray?.map(i =>  <option value={i} key={i}>{i}</option>)
                    }
                </select>
               

            </div>

        </div>
    );
};

export default AllToys;