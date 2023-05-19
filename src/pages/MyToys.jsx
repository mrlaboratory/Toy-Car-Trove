import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../Hooks/useTitle';
import { AuthContext } from '../auth/AuthProvider';
import { FiEdit } from 'react-icons/Fi';
import { MdDeleteForever } from 'react-icons/Md';
import { AiOutlineEye } from 'react-icons/Ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { AiOutlineArrowDown , AiOutlineArrowUp} from 'react-icons/Ai';


const MyToys = () => {
    const [toys, setToys] = useState(null)
    const [change, setChange] = useState(false)
    const [selectedCarCategory, setSelectedCarCategory] = useState("");
    const [current, setCurrent] = useState([])
    const [sort,setSort] = useState(false)

    


    const handleCategoryChange = (event) => {
        setSelectedCarCategory(event.target.value);
    };


    useTitle('My Toys')
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:3000/mytoys?email=${user.email}&sort=${sort}`)
            .then(res => res.json())
            .then(d => {
                if (!d.error) {
                    setToys(d)
                    console.log(d)
                } else {
                    console.log(d.error);
                }


            })
            .catch(e => console.log(e))
    }, [user, change, sort])

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const itemName = form.itemName.value
        const itemPicture = form.itemPicture.value
        const sellerName = form.sellerName.value || 'User'
        const sellerEmail = form.sellerEmail.value
        const category = selectedCarCategory
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const description = form.description.value

        const toyInfo = { itemName, itemPicture, sellerName, sellerEmail, category, price, rating, quantity, description }
        fetch(`http://localhost:3000/update/${current._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)

        })
            .then(res => res.json())
            .then(d => {
                console.log(d)
                if(d.acknowledged){
                    setChange(!change)
                    toast.success('Toy updated succcessfully !!')
                }
                
            })
            .catch(e => console.log(e))
    }

    const setId = id => {
        const find = toys.find(t => t._id === id)
        if (find) {
            setCurrent(find)
            setSelectedCarCategory(find.category)
        } else {
            setCurrent([])
        }
    }

    const deleteHandle = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/deleteToy/${id}`, {
                    method: "DELETE",
                    headers: {
                        'content-type': 'application/json'
                    },

                })
                    .then(res => res.json())
                    .then(d => {
                        if (d.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setChange(!change)
                        }
                    })
                    .catch(e => console.log(e))

            }
        })

    }


    return (
        <div className='p-3 container mx-auto'>
            <h2 className='text-center my-3 font-bold text-2xl'>{toys && (toys?.length !== 0) ? 'Your all toys item' : 'You did not add any toy yet...'}</h2>
            <div className='p-5 flex justify-center items-center'>
            </div>
            <div>
                <div className="overflow-x-auto">
                    {
                        toys && (toys?.length !== 0) && <table className="table table-zebra  w-full border border-gray-200">

                            <thead>
                                <tr>
                                    <th>Toy Name</th>
                                    <th>Category</th>
                                    <th onClick={()=> setSort(!sort)}>
                                        <div className='flex gap-2 cursor-pointer'>
                                        Price {sort ? 
                                        <AiOutlineArrowUp className='text-lg font-bold'></AiOutlineArrowUp> : 
                                        <AiOutlineArrowDown  className='text-lg font-bold'></AiOutlineArrowDown>}
                                        </div>
                                         </th>
                                    <th>Avilable Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    toys?.map((toy, i) => <tr key={toy._id}>
                                        <th>{toy.itemName}</th>
                                        <td>{toy.category}</td>
                                        <td>{toy.price}$</td>
                                        <td>{toy.quantity}</td>
                                        <td>
                                            <div className='flex gap-2'>
                                                <label onClick={() => setId(toy._id)} htmlFor="my-modal-3" className='text-primary text-lg cursor-pointer'> <FiEdit ></FiEdit> </label>

                                                <button onClick={() => deleteHandle(toy._id)}> <MdDeleteForever className='text-primary text-xl'></MdDeleteForever> </button>
                                                <Link to={`/toy/${toy._id}`}> <AiOutlineEye className='text-primary text-xl'></AiOutlineEye> </Link>
                                            </div>
                                        </td>
                                    </tr>)

                                }
                            </tbody>
                        </table>
                    }



                </div>

            </div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-4xl relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div className=''>
                            <div className='flex justify-center'>

                                <form onSubmit={handleUpdate} className='p-2 w-full'>
                                    <input defaultValue={current?.itemName} required type="text" name='itemName' placeholder="Toy name .." className="input w-full border border-gray-200" />
                                    <input defaultValue={current?.itemPicture} required type="text" name='itemPicture' placeholder="Toy Picture url .." className="input w-full border border-gray-200 mt-2" />

                                    <div className=' flex-col sm:flex-row gap-2 my-2 hidden'>

                                        <input required type="text" disabled name='sellerName' defaultValue={user?.displayName} placeholder="Seller name " className="input w-full border border-gray-200" />
                                        <input required type="text" disabled name='sellerEmail' defaultValue={user?.email} placeholder="Seller email " className="input w-full border border-gray-200" />


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

                                        <input defaultValue={current?.price} required type="number" name='price' placeholder="Price " className="input border border-gray-200" />


                                    </div>

                                    <div className='flex flex-col sm:flex-row gap-2 my-2'>
                                        <input defaultValue={current?.rating} className="input border border-gray-200" type="number" step="0.1" min="0" max="5" required name='rating' />
                                        <input defaultValue={current?.quantity} required type="number" placeholder="Quantity" name='quantity' className="input w-full border border-gray-200" />


                                    </div>
                                    <textarea defaultValue={current?.description} name="description" placeholder='Description ...' id="" cols="30" rows="10" className="input w-full p-5 h-[200px] border border-gray-200"></textarea>

                                    <button className='btn btn-primary text-white w-full'>Update</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToys;