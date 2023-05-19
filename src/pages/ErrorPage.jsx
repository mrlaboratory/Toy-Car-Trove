import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='container mx-auto h-screen flex justify-center items-center'>
            <div>
                <div>
                    <img className='' src="https://i.ibb.co/PtCP5wc/Error-404-Vectro-For-Free-removebg-preview.png" alt="" />
                </div>
                <h2 className='my-5 text-3xl text-center'>Page not found </h2>
                <h2 className='my-5 text-3xl text-center text-primary'>{error?.error?.message} </h2>
               <div className='flex justify-center'>
               <Link to='/' className='my-3 btn btn-primary text-white'>back to home</Link>
               </div>
            </div>
        </div>
    );
};

export default ErrorPage;