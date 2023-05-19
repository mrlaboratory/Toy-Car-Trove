import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from 'react-icons/Bi';
import { FcGoogle } from 'react-icons/Fc';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../auth/AuthProvider';
import useTitle from '../Hooks/useTitle';




// this is login page 
const Login = () => {

    useTitle('Login')

    const { user, loginUser, loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [isShow, setIsShow] = useState(false)


    const location = useLocation()
    const from = location?.state?.pathname || '/'
    console.log(from)
    // console.log(location)
    const loginWithGoogleHandle = () => {
        loginWithGoogle()
            .then(res => {
                setSuccess('Login successfull')
                toast.success('Login successfull')
            })
            .catch(e => console.log(e))
    }

    const sigininuser = e => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
            .then(res => {
                setSuccess('Login successfull')
                toast.success('Login successfull')

            })
            .catch(e => {
                setError(e.message)
                console.log(e.message)
            })

    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, from])
    // if(user){
    //   navigate(from)
    // }



    return (
        <div className="">
            <div className="flex justify-center my-5">

                <div className="w-full sm:w-[500px] p-5">
                    <div className='text-center'>
                        <h2 className='text-xl font-bold my-3'> Login</h2>
                    </div>
                    <div className='w-full sm:w-[500px]'>
                        <form onSubmit={sigininuser} className="card-body p-0 w-full">

                            <div className="form-control">

                                <input required type="email" placeholder="Your email " name='email' className="input input-bordered" />
                            </div>

                            <div className="form-control ">

                                <div className='relative'>
                                    <input required type={`${isShow ? 'text' : 'password'}`} name='password' placeholder="Your password" className="input input-bordered w-full" />
                                    <button className='absolute right-0 top-0 h-full pr-1' type='button' onClick={() => setIsShow(!isShow)}>{isShow ? <BiHide className='text-2xl'></BiHide> : <BiShow className='text-2xl'></BiShow>}</button>
                                </div>
                                <label className="label ">

                                    <p>Are you new ?  <Link to='/register' className="text-primary">Create account </Link></p>
                                </label>
                                <label className='label'>
                                    {error && <h3 className='text-red-600 font-bold'>{error}</h3>}
                                    {success && <h3 className='text-green-600 font-bold'>{success}</h3>}
                                </label>
                            </div>
                            <div className="form-control">
                                <div className='flex justify-start gap-2 items-center'>
                                    <input type="checkbox" className="checkbox checkbox-primary" />
                                    <span className="label-text">Remember me</span>
                                </div>
                            </div>
                            <div className="form-control ">
                                <button type='submit' className="btn btn-primary text-white">Login</button>
                            </div>
                            <div className='mb-5'>
                                <h3 className='font-bold text-center'>Or</h3>
                                <div className='mt-2 flex justify-between items-center border-2 border-primary rounded-lg'>
                                    <button onClick={loginWithGoogleHandle} type='button' className='flex justify-center items-center text-xl   flex-grow px-3 py-2 w-full'><FcGoogle className='text-2xl'></FcGoogle> Signin with Google</button>

                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;