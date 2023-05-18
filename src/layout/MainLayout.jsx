import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';

const MainLayout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out'
        });
    }, []);
    return (
        <div className='bg-gray-100'>
            <div className='bg-white border-b-2 border-primary w-full'>
                <div className='container mx-auto'>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className='container mx-auto '>
                <Outlet></Outlet>
            </div>


            <div className='w-full bg-white'>
                <div className='container mx-auto'>
                    <Footer></Footer>

                </div>

            </div>

        </div>
    );
};

export default MainLayout;