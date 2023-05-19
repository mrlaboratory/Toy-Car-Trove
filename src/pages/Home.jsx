import React from 'react';
import GalleryImages from '../components/GalleryImages';
import Category from '../components/Category';
import Slider from '../components/Slider';
import useTitle from '../Hooks/useTitle';
import Reviews from '../components/Reviews';
import Subscribe from '../components/Subscribe';

const Home = () => {
    useTitle('Home')
    return (
        <div>


        <Subscribe></Subscribe>
         

        </div>
    );
};

export default Home;