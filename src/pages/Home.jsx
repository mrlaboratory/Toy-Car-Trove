import React from 'react';
import GalleryImages from '../components/GalleryImages';
import Category from '../components/Category';
import Slider from '../components/Slider';
import useTitle from '../Hooks/useTitle';
import Reviews from '../components/Reviews';
import Subscribe from '../components/Subscribe';
import LatestBlog from '../components/LatestBlog';

const Home = () => {
    useTitle('Home')
    return (
        <div>

            <div className=''>
                <Slider></Slider>
            </div>
            <div className='w-full bg-white'> <div className='container mx-auto'> <GalleryImages></GalleryImages> </div></div>
            <div className='container mx-auto'>  <Category></Category> </div>
            <div className='container mx-auto'> <Reviews></Reviews> </div>
            <div className='container mx-auto'>  <LatestBlog></LatestBlog> </div>
            <div className='w-full'>  <Subscribe></Subscribe> </div>









        </div>
    );
};

export default Home;