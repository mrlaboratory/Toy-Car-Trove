import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='bg-gray-100'>
            <div className='bg-white'>
                <div className='container mx-auto'>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className='container mx-auto bg-primary'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;