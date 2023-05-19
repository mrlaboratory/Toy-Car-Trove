import React from 'react';
import GalleryImages from '../components/GalleryImages';
import Category from '../components/Category';
import Slider from '../components/Slider';
import useTitle from '../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>


         <Category></Category>
         

        </div>
    );
};

export default Home;