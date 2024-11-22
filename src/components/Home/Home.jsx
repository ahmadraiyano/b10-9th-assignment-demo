import React from 'react';
import Hero from '../Hero/Hero';
import TopBrands from '../TopBrands/TopBrands';
import OnSales from '../OnSales/OnSales';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TopBrands></TopBrands>
            <OnSales></OnSales>
        </div>
    );
};

export default Home;