import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from 'react-icons/Bi';
import { FcGoogle } from 'react-icons/Fc';
import { AuthContext } from '../auth/AuthProvider';
import { toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import useTitle from '../Hooks/useTitle';



const Register = () => {
    useTitle('Register')
    const { createUser, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isShow, setIsShow] = useState(false)



    const location = useLocation()
    const from = location?.state?.pathname || '/'



    const handleRegister = e => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value || 'https://mrlaboratory.github.io/img/user.png'
        createUser(email, password)
            .then(res => {
                setSuccess('Account created successfully')
                toast.success('Account created successfully')
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(e => {
                console.log(e)
                toast.error(e.message)
                setError(e.message)
            })


    }
    useEffect(() => {
        if (user) {
            console.log(1)
            navigate(from, { replace: true })
        }
    }, [user, from])

    return (
        <div className="">
            <div className="flex justify-center my-5">

                <div className="w-full sm:w-[500px] p-5">
                    <div className='text-center'>
                        <h2 className='text-xl font-bold my-3'>Create a new account !!</h2>
                    </div>
                    <div className='w-full sm:w-[500px]'>
                        <form onSubmit={handleRegister} className="card-body p-0 w-full">

                            <div className="form-control">
                                <input required type="text" placeholder="Your full name " name='name' className="input input-bordered" />
                                <input required type="email" placeholder="Your email " name='email' className="input input-bordered my-2" />
                                <input type="text" placeholder="Your photo url (Optional)" name='photo' className="input input-bordered " />
                            </div>

                            <div className='relative'>
                                <input required type={`${isShow ? 'text' : 'password'}`} name='password' placeholder="Your password" className="input input-bordered w-full" />
                                <button className='absolute right-0 top-0 h-full pr-1' type='button' onClick={() => setIsShow(!isShow)}>{isShow ? <BiHide className='text-2xl'></BiHide> : <BiShow className='text-2xl'></BiShow>}</button>
                            </div>


                            <label className="label ">
                                <p>You have account ?  <Link to='/login' className="text-primary">Login </Link></p>
                            </label>
                            <label className='label'>
                                {error && <h3 className='text-red-600 font-bold'>{error}</h3>}
                                {success && <h3 className='text-green-600 font-bold'>{success}</h3>}
                            </label>



                            <div className="form-control ">
                                <button type='submit' className="btn btn-primary text-white">Create account</button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;