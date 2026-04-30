import React from 'react';
import Hero from './Hero';
import Populars from '../Products/Populars';
import SummerCare from './SummerCare';
import TopBrand from './TopBrand';

const HomePage = () => {
    return (
        <div>
    <Hero/>
    <Populars/>
    <SummerCare/>
    <TopBrand/>
        </div>
    );
};

export default HomePage;